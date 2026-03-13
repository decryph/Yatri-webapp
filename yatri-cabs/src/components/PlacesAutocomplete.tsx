"use client";

import React, { useState, useEffect, useRef } from 'react';

interface PlacesAutocompleteProps {
  value: string;
  onChange: (value: string, placeId?: string) => void;
  placeholder?: string;
  className?: string;
  label?: string;
  icon?: React.ReactNode;
}

interface PlacePrediction {
  description: string;
  place_id: string;
}

export default function PlacesAutocomplete({
  value,
  onChange,
  placeholder = "Enter city name",
  className = "",
  label,
  icon
}: PlacesAutocompleteProps) {
  const [suggestions, setSuggestions] = useState<PlacePrediction[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  // Initialize Google Places Autocomplete Service
  const autocompleteService = useRef<google.maps.places.AutocompleteService | null>(null);

  useEffect(() => {
    // Initialize Google Places API when component mounts
    if (typeof google !== 'undefined' && google.maps && google.maps.places) {
      autocompleteService.current = new google.maps.places.AutocompleteService();
    }
  }, []);

  const getSuggestions = async (input: string) => {
    if (!autocompleteService.current || input.length < 2) {
      setSuggestions([]);
      return;
    }

    setIsLoading(true);

    try {
      const request = {
        input,
        types: ['(cities)'], // Only show cities
        componentRestrictions: { country: 'IN' } // Restrict to India
      };

      autocompleteService.current.getPlacePredictions(
        request,
        (predictions, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && predictions) {
            setSuggestions(predictions.slice(0, 5)); // Show max 5 suggestions
          } else {
            setSuggestions([]);
          }
          setIsLoading(false);
        }
      );
    } catch (error) {
      console.error('Error fetching place suggestions:', error);
      setSuggestions([]);
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);

    if (newValue.trim()) {
      getSuggestions(newValue);
      setIsOpen(true);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  };

  const handleSuggestionClick = (suggestion: PlacePrediction) => {
    onChange(suggestion.description, suggestion.place_id);
    setSuggestions([]);
    setIsOpen(false);
  };

  const handleInputFocus = () => {
    if (suggestions.length > 0) {
      setIsOpen(true);
    }
  };

  const handleInputBlur = () => {
    // Delay hiding suggestions to allow click
    setTimeout(() => setIsOpen(false), 200);
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative">
      {label && (
        <label className="block text-[12px] font-semibold tracking-[0.02em] text-[#4b5563] uppercase mb-0.5">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder={placeholder}
          className={`w-full bg-transparent border-0 border-b border-[#9ca3af] focus:ring-0 py-1 px-0 text-[13px] placeholder-[#9ca3af] font-normal ${
            icon ? 'pr-5' : ''
          } ${className}`}
          autoComplete="off"
        />
        {icon && <div className="absolute right-0 top-0.5">{icon}</div>}

        {/* Loading indicator */}
        {isLoading && (
          <div className="absolute right-2 top-2 text-[#9ca3af]">
            <div className="animate-spin h-3 w-3 border border-gray-400 border-t-transparent rounded-full"></div>
          </div>
        )}
      </div>

      {/* Suggestions dropdown */}
      {isOpen && suggestions.length > 0 && (
        <div
          ref={suggestionsRef}
          className="absolute top-full left-0 right-0 z-50 bg-white border border-[#d1d5db] rounded-md shadow-lg mt-1 max-h-60 overflow-y-auto"
        >
          {suggestions.map((suggestion) => (
            <button
              key={suggestion.place_id}
              type="button"
              onClick={() => handleSuggestionClick(suggestion)}
              className="w-full text-left px-3 py-2 hover:bg-[#f3f9ee] border-b border-[#e5e7eb] last:border-b-0 text-[13px] text-[#374151] transition-colors"
            >
              <div className="flex items-center">
                <i className="fa-solid fa-location-dot text-[#6b7280] mr-2 text-xs"></i>
                {suggestion.description}
              </div>
            </button>
          ))}
        </div>
      )}

      {/* No results message */}
      {isOpen && !isLoading && value.length >= 2 && suggestions.length === 0 && (
        <div
          ref={suggestionsRef}
          className="absolute top-full left-0 right-0 z-50 bg-white border border-[#d1d5db] rounded-md shadow-lg mt-1"
        >
          <div className="px-3 py-2 text-[13px] text-[#6b7280] italic">
            No cities found. Try a different search.
          </div>
        </div>
      )}
    </div>
  );
}