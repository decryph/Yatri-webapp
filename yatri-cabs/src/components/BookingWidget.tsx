"use client";

import React, { useState } from 'react';
import PlacesAutocomplete from './PlacesAutocomplete';
import DatePicker from './DatePicker';

type Tab = 'outstation' | 'local' | 'airport';
type TripType = 'oneWay' | 'roundTrip';

interface FormData {
  from: string;
  to: string;
  pickupDate: string;
  returnDate: string;
  pickupTime: string;
  extraTos: string[];
}

const TAB_LABELS: Record<Tab, string> = {
  outstation: 'Outstation',
  local: 'Local',
  airport: 'Airport',
};

export default function BookingWidget() {
  const [activeTab, setActiveTab] = useState<Tab>('outstation');
  const [tripType, setTripType] = useState<TripType>('oneWay');
  const [extraToFields, setExtraToFields] = useState<number>(0);

  // Form data state
  const [formData, setFormData] = useState<FormData>({
    from: '',
    to: '',
    pickupDate: '',
    returnDate: '',
    pickupTime: '00:00',
    extraTos: []
  });

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    setExtraToFields(0);
    setFormData({
      from: '',
      to: '',
      pickupDate: '',
      returnDate: '',
      pickupTime: '00:00',
      extraTos: []
    });
  };

  const handleTripTypeChange = (type: TripType) => {
    setTripType(type);
    setExtraToFields(0);
    setFormData(prev => ({
      ...prev,
      returnDate: '',
      extraTos: []
    }));
  };

  const addToField = () => {
    if (extraToFields < 3) { // Max 3 extra fields
      setExtraToFields(prev => prev + 1);
      setFormData(prev => ({
        ...prev,
        extraTos: [...prev.extraTos, '']
      }));
    }
  };

  const removeToField = () => {
    if (extraToFields > 0) {
      setExtraToFields(prev => prev - 1);
      setFormData(prev => ({
        ...prev,
        extraTos: prev.extraTos.slice(0, -1)
      }));
    }
  };

  const updateExtraTo = (index: number, value: string) => {
    setFormData(prev => {
      const newExtraTos = [...prev.extraTos];
      newExtraTos[index] = value;
      return { ...prev, extraTos: newExtraTos };
    });
  };

  // Get today's date in YYYY-MM-DD format for minimums
  const today = new Date().toISOString().split('T')[0];

  // Get next day for return date minimum
  const getMinReturnDate = () => {
    if (!formData.pickupDate) return today;
    const pickupDate = new Date(formData.pickupDate);
    pickupDate.setDate(pickupDate.getDate() + 1);
    return pickupDate.toISOString().split('T')[0];
  };

  // Determine which sections/fields to display per state
  const showTripToggle = activeTab !== 'airport';
  const showReturnDate =
    activeTab === 'outstation' ||
    (activeTab === 'local' && tripType === 'roundTrip');
  const showPickupTime = !(activeTab === 'outstation' && tripType === 'oneWay');
  const showExtraStops = tripType === 'roundTrip' && activeTab !== 'airport';
  const showToIcons =
    activeTab === 'outstation' ||
    (activeTab === 'local' && tripType === 'roundTrip');
  const secondFieldLabel = activeTab === 'airport' ? 'Trip' : 'To';

  // Dynamic sizing based on active tab
  const isCompactMode = activeTab === 'airport';
  const containerClasses = isCompactMode
    ? "bg-[#efefef] rounded-2xl shadow-[0_16px_34px_rgba(0,0,0,0.28)] border border-[#d6d6d6] pt-3 pr-5 pb-3 pl-5 w-full max-w-lg mx-auto flex flex-col gap-3"
    : "bg-[#efefef] rounded-2xl shadow-[0_16px_34px_rgba(0,0,0,0.28)] border border-[#d6d6d6] pt-4 pr-6 pb-4 pl-6 w-full h-full flex flex-col gap-4";

  const formGridClasses = isCompactMode
    ? "grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 transition-all duration-300"
    : "grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3.5 transition-all duration-300";

  return (
    <div className={containerClasses}>
      {/* Tabs */}
      <div className={`flex items-center border-b border-[#d8d8d8] ${isCompactMode ? 'pb-3 mb-3' : 'pb-3.5 mb-3.5'}`}>
        {(['outstation', 'local', 'airport'] as Tab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`flex-1 text-center text-[17px] font-semibold leading-none focus:outline-none transition-colors ${
              activeTab === tab
                ? 'py-1.5 px-4 bg-[#1d6a09] text-white rounded-md'
                : 'text-[#2c7a14]'
            }`}
          >
            {TAB_LABELS[tab]}
          </button>
        ))}
      </div>

      {/* Trip Type Toggle */}
      {showTripToggle && (
        <div className={`flex items-center justify-center gap-9 ${isCompactMode ? 'mb-2' : 'mb-3'}`}>
          {(['oneWay', 'roundTrip'] as TripType[]).map((type) => {
            const isActive = tripType === type;
            return (
              <label
                key={type}
                onClick={() => handleTripTypeChange(type)}
                className={`inline-flex items-center cursor-pointer ${
                  isActive
                    ? 'border border-[#9fc58e] rounded px-2.5 py-0.5 bg-[#f3f9ee]'
                    : ''
                }`}
              >
                <div
                  className={`w-3.5 h-3.5 rounded-full border ${
                    isActive ? 'border-[#4f8b2d]' : 'border-[#bcc5d2]'
                  } bg-white flex items-center justify-center mr-2`}
                >
                  {isActive && (
                    <div className="w-2 h-2 rounded-full bg-[#65b741]"></div>
                  )}
                </div>
                <span
                  className={`text-[14px] font-medium ${
                    isActive ? 'text-[#3c6f23]' : 'text-[#4a5568]'
                  }`}
                >
                  {type === 'oneWay' ? 'One Way' : 'Round Trip'}
                </span>
              </label>
            );
          })}
        </div>
      )}

      {/* Form Fields — key forces remount on state change */}
      <div
        key={`${activeTab}-${tripType}-${extraToFields}`}
        className={formGridClasses}
      >
        {/* FROM */}
        <div className="relative">
          <PlacesAutocomplete
            value={formData.from}
            onChange={(value) => setFormData(prev => ({ ...prev, from: value }))}
            placeholder="Enter pickup location"
            label="From"
          />
        </div>

        {/* TO / TRIP */}
        <div className="relative">
          <PlacesAutocomplete
            value={formData.to}
            onChange={(value) => setFormData(prev => ({ ...prev, to: value }))}
            placeholder="Enter destination"
            label={secondFieldLabel}
            icon={
              showToIcons ? (
                <div className="flex flex-col text-[#6b7280]">
                  <i
                    className="fa-solid fa-circle-minus text-[10px] mb-0.5 hover:text-brand-bg-green cursor-pointer"
                    onClick={removeToField}
                  ></i>
                  <i
                    className="fa-solid fa-circle-plus text-[10px] hover:text-brand-bg-green cursor-pointer"
                    onClick={addToField}
                  ></i>
                </div>
              ) : undefined
            }
          />
        </div>

        {/* Dynamic Extra TO stops — Round Trip for Local and Outstation */}
        {showExtraStops && extraToFields > 0 && (
          Array.from({ length: extraToFields }, (_, index) => (
            <div key={`extra-to-${index}`} className="relative">
              <PlacesAutocomplete
                value={formData.extraTos[index] || ''}
                onChange={(value) => updateExtraTo(index, value)}
                placeholder="Enter destination"
                label="To"
                icon={
                  <div className="flex flex-col text-[#6b7280]">
                    <i
                      className="fa-solid fa-circle-minus text-[10px] mb-0.5 hover:text-brand-bg-green cursor-pointer"
                      onClick={removeToField}
                    ></i>
                    <i
                      className="fa-solid fa-circle-plus text-[10px] hover:text-brand-bg-green cursor-pointer"
                      onClick={addToField}
                    ></i>
                  </div>
                }
              />
            </div>
          ))
        )}

        {/* Pickup Date — always shown */}
        <div className="relative">
          <DatePicker
            value={formData.pickupDate}
            onChange={(date) => setFormData(prev => ({ ...prev, pickupDate: date }))}
            label="Pickup Date"
            placeholder="Select pickup date"
            minDate={today}
          />
        </div>

        {/* Second column: Return Date OR Pickup Time (side-by-side with Pickup Date) */}
        {showReturnDate ? (
          <div className="relative">
            <DatePicker
              value={formData.returnDate}
              onChange={(date) => setFormData(prev => ({ ...prev, returnDate: date }))}
              label="Return Date"
              placeholder="Select return date"
              minDate={getMinReturnDate()}
            />
          </div>
        ) : showPickupTime ? (
          <div className="relative">
            <label className="block text-[12px] font-semibold text-[#4b5563] mb-0.5">
              Pickup Time
            </label>
            <div className="relative flex items-center border-b border-[#9ca3af] pb-1">
              <i className="fa-regular fa-clock text-[#6b7280] mr-2 text-sm"></i>
              <input
                className="w-full bg-transparent border-0 focus:ring-0 py-0 px-0 text-[13px] font-normal text-[#6b7280]"
                type="time"
                value={formData.pickupTime}
                onChange={(e) => setFormData(prev => ({ ...prev, pickupTime: e.target.value }))}
              />
            </div>
          </div>
        ) : null}

        {/* Pickup Time on its own row — when both Return Date AND Pickup Time are needed */}
        {showReturnDate && showPickupTime && (
          <div className="sm:col-span-2 relative mt-1">
            <label className="block text-[12px] font-semibold text-[#4b5563] mb-0.5">
              Pickup Time
            </label>
            <div className="relative flex items-center border-b border-[#9ca3af] pb-1 max-w-xs">
              <i className="fa-regular fa-clock text-[#6b7280] mr-2 text-sm"></i>
              <input
                className="w-full bg-transparent border-0 focus:ring-0 py-0 px-0 text-[13px] font-normal text-[#6b7280]"
                type="time"
                value={formData.pickupTime}
                onChange={(e) => setFormData(prev => ({ ...prev, pickupTime: e.target.value }))}
              />
            </div>
          </div>
        )}
      </div>

      {/* CTA Button */}
      <div className={`${isCompactMode ? 'mt-3 mb-1' : 'mt-4 mb-1'} flex justify-center`}>
        <button className={`bg-[#1f7307] hover:bg-[#165507] text-white font-semibold rounded-md shadow focus:outline-none ${
          isCompactMode
            ? 'py-2 px-7 text-[22px] leading-none tracking-[-0.01em]'
            : 'py-2.5 px-9 text-[27px] leading-none tracking-[-0.01em]'
        }`}>
          EXPLORE CABS
        </button>
      </div>
    </div>
  );
}
