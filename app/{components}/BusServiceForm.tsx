'use client'
import React, { useState, useEffect, useRef } from 'react';
import busServicesData, { BusRoute } from './BusServicesData';
import { Icon } from '@iconify/react';
import { Minus, Plus } from 'lucide-react';

const BusServiceForm: React.FC = () => {
  const [selectedRoute, setSelectedRoute] = useState<number | null>(null);
  const [numberOfChildren, setNumberOfChildren] = useState<number>(1);
  const [tripType, setTripType] = useState<'roundTrip' | 'oneWay'>('roundTrip');
  const [totalFees, setTotalFees] = useState<number | null>(null);
  const [discountApplied, setDiscountApplied] = useState<boolean>(false);
  
  const [isRouteDropdownOpen, setIsRouteDropdownOpen] = useState(false);
  const routeContainerRef = useRef<HTMLDivElement>(null);
  const [isFadingIn, setIsFadingIn] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (routeContainerRef.current && !routeContainerRef.current.contains(event.target as Node)) {
        setIsRouteDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const calculateTotalFees = (): { total: number, discounted: boolean } | null => {
    if (selectedRoute === null) return null;

    const route: BusRoute | undefined = busServicesData.bus_routes.find(r => r.route_number === selectedRoute);
    if (!route) return null;

    let baseFee = tripType === 'roundTrip' ? route.round_trip_price : route.one_way_price;
    let totalFeesForChildren = baseFee * numberOfChildren;
    let discounted = false;

    const discountKey = `${numberOfChildren}_children`;
    if (Object.prototype.hasOwnProperty.call(busServicesData.discount, discountKey)) {
      // @ts-ignore
      const discount = busServicesData.discount[discountKey];
      totalFeesForChildren -= tripType === 'roundTrip' ? discount.round_trip_discount : discount.one_way_discount;
      discounted = true;
    }

    return { total: totalFeesForChildren, discounted };
  };

  const handleRouteSelect = (routeNumber: number) => {
    setSelectedRoute(routeNumber);
    setIsRouteDropdownOpen(false);
    setTotalFees(null);
  };

  const handlePupilsChange = (increment: number) => {
    setNumberOfChildren(prev => {
      const newVal = prev + increment;
      return newVal < 1 ? 1 : newVal;
    });
    setTotalFees(null);
  };

  const handleTripTypeChange = (type: 'roundTrip' | 'oneWay') => {
    setTripType(type);
    setTotalFees(null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedRoute === null) {
      // Could show error state if desired
      return;
    }
    const result = calculateTotalFees();
    if (result) {
      setTotalFees(result.total);
      setDiscountApplied(result.discounted);
      
      // trigger animation
      setIsFadingIn(false);
      setTimeout(() => setIsFadingIn(true), 10);
    }
  };

  const selectedRouteObj = selectedRoute ? busServicesData.bus_routes.find(r => r.route_number === selectedRoute) : null;

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
        {/* Custom Route Dropdown */}
        <div className="flex flex-col gap-2 relative" ref={routeContainerRef}>
          <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
            <Icon icon="solar:routing-2-linear" style={{ strokeWidth: 1.5 }} className="text-slate-400" />
            Where do you live?
          </label>
          <button 
            type="button" 
            onClick={() => setIsRouteDropdownOpen(!isRouteDropdownOpen)}
            className={`w-full h-14 px-4 bg-slate-50 hover:bg-slate-100 transition-colors rounded-2xl ring-1 focus:outline-none focus:ring-2 flex items-center justify-between group ${isRouteDropdownOpen ? 'select-open ring-emerald-500/50' : 'ring-slate-200 focus:ring-emerald-500/50'}`}
          >
            <span className={`text-sm font-medium truncate pr-4 ${selectedRouteObj ? 'text-slate-800' : 'text-slate-400'}`}>
              {selectedRouteObj ? `Route ${selectedRouteObj.route_number} (${selectedRouteObj.areas_covered[0]}${selectedRouteObj.areas_covered.length > 1 ? '...' : ''})` : 'Select a route...' }
            </span>
            <Icon icon="solar:alt-arrow-down-linear" style={{ strokeWidth: 1.5 }} className="select-icon text-slate-400 transition-transform duration-200 flex-shrink-0" />
          </button>

          {/* Dropdown List */}
          {isRouteDropdownOpen && (
            <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-white ring-1 ring-slate-200 rounded-2xl shadow-xl z-20 flex flex-col overflow-hidden">
              <div className="max-h-64 overflow-y-auto custom-scrollbar p-2 flex flex-col gap-1">
                {busServicesData.bus_routes.map(route => (
                  <button 
                    key={route.route_number}
                    type="button" 
                    onClick={() => handleRouteSelect(route.route_number)}
                    className="w-full text-left px-3 py-3 rounded-xl hover:bg-slate-50 transition-colors flex flex-col gap-1 focus:outline-none focus:bg-slate-50"
                  >
                    <span className="text-sm font-semibold text-slate-800">Route {route.route_number}</span>
                    <span className="text-xs font-medium text-slate-500 truncate w-full">{route.areas_covered.join(', ')}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Pupils Counter */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Icon icon="solar:users-group-rounded-linear" style={{ strokeWidth: 1.5 }} className="text-slate-400" />
              Children
            </label>
            <div className="h-14 flex items-center justify-between p-1 ring-1 ring-slate-200 rounded-2xl bg-slate-50">
              <button 
                type="button" 
                onClick={() => handlePupilsChange(-1)}
                disabled={numberOfChildren <= 1}
                className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-900 hover:bg-white hover:text-slate-800 hover:shadow-sm transition-all focus:outline-none disabled:opacity-30 disabled:hover:bg-transparent"
              >
                <Minus size={16} strokeWidth={1.5} />
              </button>
              <span className="text-base font-semibold w-8 text-center text-slate-800">{numberOfChildren}</span>
              <button 
                type="button" 
                onClick={() => handlePupilsChange(1)}
                className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-900 hover:bg-white hover:text-slate-800 hover:shadow-sm transition-all focus:outline-none"
              >
                <Plus size={16} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Custom Trip Type Toggle */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Icon icon="solar:transfer-horizontal-linear" style={{ strokeWidth: 1.5 }} className="text-slate-400" />
              Trip type
            </label>
            <div className="h-14 flex p-1 bg-slate-50 rounded-2xl ring-1 ring-slate-200 relative">
              <div 
                className="absolute top-1 left-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-xl shadow-[0_2px_8px_rgb(0,0,0,0.08)] ring-1 ring-slate-900/5 transition-transform duration-300 ease-out pointer-events-none"
                style={{ transform: tripType === 'oneWay' ? 'translateX(100%)' : 'translateX(0)' }}
              ></div>
              <button 
                type="button" 
                onClick={() => handleTripTypeChange('roundTrip')}
                className={`trip-tab flex-1 flex items-center justify-center text-sm font-medium z-10 transition-colors focus:outline-none rounded-xl ${tripType === 'roundTrip' ? 'text-slate-800' : 'text-slate-500 hover:text-slate-700'}`}
              >
                Round Trip
              </button>
              <button 
                type="button" 
                onClick={() => handleTripTypeChange('oneWay')}
                className={`trip-tab flex-1 flex items-center justify-center text-sm font-medium z-10 transition-colors focus:outline-none rounded-xl ${tripType === 'oneWay' ? 'text-slate-800' : 'text-slate-500 hover:text-slate-700'}`}
              >
                One Way
              </button>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button 
          type="submit"
          className="mt-2 w-full h-14 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 active:scale-[0.98] text-white rounded-2xl text-base font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/50 shadow-[0_4px_14px_0_rgb(16,185,129,0.39)]"
        >
          Calculate fare
          <Icon icon="solar:arrow-right-linear" style={{ strokeWidth: 1.5 }} className="text-lg" />
        </button>
      </form>

      {/* Results Display */}
      {totalFees !== null && (
        <div className={`mt-6 overflow-hidden rounded-2xl bg-emerald-50 ring-1 ring-emerald-500/20 p-5 ${isFadingIn ? 'fade-in' : ''}`}>
          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest">Estimated Total</p>
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-medium text-emerald-700">₦</span>
              <span className="text-3xl font-semibold tracking-tight text-emerald-900">{totalFees.toLocaleString('en-NG')}</span>
            </div>
            {discountApplied && (
              <p className="text-xs font-medium text-emerald-600/80 mt-1">
                Includes sibling discount
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default BusServiceForm;
