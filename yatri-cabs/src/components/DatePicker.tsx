"use client";

import React, { useState, useRef, useEffect } from 'react';

interface DatePickerProps {
  value: string;
  onChange: (date: string) => void;
  placeholder?: string;
  label?: string;
  className?: string;
  minDate?: string;
  maxDate?: string;
}

export default function DatePicker({
  value,
  onChange,
  placeholder = "Select date",
  label,
  className = "",
  minDate,
  maxDate
}: DatePickerProps) {
  const [isMobile, setIsMobile] = useState(false);
  const hiddenInputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Format date for display (DD/MM/YYYY)
  const formatDateForDisplay = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return '';

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Format date for input (YYYY-MM-DD)
  const formatDateForInput = (dateString: string) => {
    if (!dateString) return '';

    // If already in YYYY-MM-DD format, return as is
    if (dateString.match(/^\d{4}-\d{2}-\d{2}$/)) {
      return dateString;
    }

    // If in DD/MM/YYYY format, convert to YYYY-MM-DD
    const parts = dateString.split('/');
    if (parts.length === 3) {
      const [day, month, year] = parts;
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    }

    return '';
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value; // This is in YYYY-MM-DD format
    onChange(newDate);
  };

  const handleInputClick = () => {
    if (hiddenInputRef.current) {
      // Try multiple approaches for better browser compatibility
      try {
        hiddenInputRef.current.focus();
        if (hiddenInputRef.current.showPicker) {
          hiddenInputRef.current.showPicker();
        } else {
          // Fallback: trigger click event
          hiddenInputRef.current.click();
        }
      } catch (error) {
        // Final fallback: just click the input
        hiddenInputRef.current.click();
      }
    }
  };

  const displayValue = value ? formatDateForDisplay(value) : '';

  return (
    <div className="relative" ref={containerRef}>
      {label && (
        <label className="block text-[12px] font-semibold text-[#4b5563] mb-0.5">
          {label}
        </label>
      )}
      <div className="relative">
        {/* Display input */}
        <input
          type="text"
          value={displayValue}
          onClick={handleInputClick}
          placeholder={placeholder}
          readOnly
          className={`w-full bg-transparent border-0 border-b border-[#9ca3af] focus:ring-0 py-1 px-0 pr-6 text-[13px] placeholder-[#9ca3af] font-normal cursor-pointer ${className}`}
        />

        {/* Calendar icon */}
        <i
          className="fa-regular fa-calendar absolute right-0 bottom-2 text-[#6b7280] cursor-pointer hover:text-brand-bg-green transition-colors duration-200"
          onClick={handleInputClick}
        ></i>

        {/* Native date input - positioned properly for better mobile compatibility */}
        <input
          ref={hiddenInputRef}
          type="date"
          value={formatDateForInput(value)}
          onChange={handleDateChange}
          min={minDate}
          max={maxDate}
          className={`absolute inset-0 w-full h-full opacity-0 cursor-pointer ${
            isMobile ? 'z-10' : 'z-0'
          }`}
          style={{
            // Ensure the input covers the entire clickable area on mobile
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          tabIndex={-1}
        />
      </div>
    </div>
  );
}