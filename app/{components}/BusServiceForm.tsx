// BusServiceForm.tsx
import React, { useState } from 'react';
import busServicesData, { BusRoute } from './BusServicesData';

interface BusServiceFormProps { }

const BusServiceForm: React.FC<BusServiceFormProps> = () => {
  // State variables
  const [selectedRoute, setSelectedRoute] = useState<number | null>(null);
  const [numberOfChildren, setNumberOfChildren] = useState<number>(1);
  const [tripType, setTripType] = useState<'roundTrip' | 'oneWay'>('roundTrip');
  const [totalFees, setTotalFees] = useState<number | null>(null);

  // Calculate total fees
  const calculateTotalFees = (): number | null => {
    if (selectedRoute === null) {
      return null;
    }

    const route: BusRoute | undefined = busServicesData.bus_routes.find(route => route.route_number === selectedRoute);
    if (!route) {
      return null;
    }

    let baseFee = tripType === 'roundTrip' ? route.round_trip_price : route.one_way_price;

    // Calculate total fee for each child
    let totalFeesForChildren = baseFee * numberOfChildren;

    // Apply discount based on the number of children to the total fees for children
    const discountKey = `${numberOfChildren}_children`;
    if (busServicesData.discount.hasOwnProperty(discountKey)) {
      const discount = busServicesData.discount[discountKey];
      totalFeesForChildren -= tripType === 'roundTrip' ? discount.round_trip_discount : discount.one_way_discount;
    }

    return totalFeesForChildren;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const calculatedTotalFees = calculateTotalFees();
    setTotalFees(calculatedTotalFees);
  };

  return (
    <div className="z-10 max-w-2xl w-full items-center justify-between font-mono text-sm flex flex-col gap-5 ">
      <form onSubmit={handleSubmit} className='flex flex-col gap-3 w-full'>
        <div className='flex flex-col gap-1'>
          <label className='text-base font-semibold'>Select Route:</label>
          <div >
            <select
              value={selectedRoute || ''}
              onChange={(e) => setSelectedRoute(Number(e.target.value))}
              className='w-full border-2 rounded-sm h-10 px-2'
            >
              <option value="" disabled>Select a route</option>
              {busServicesData.bus_routes.map(route => (
                <option key={route.route_number} value={route.route_number}>
                  {`Route ${route.route_number} (${route.areas_covered.join(', ')})`}
                </option>
              ))}
            </select>
          </div>

        </div>

        <div className='flex gap-3 justify-between'>
          <div className='flex flex-col gap-1 w-full'>
            <label className='text-base font-semibold'>No of Pupil</label>
            <input
              type="number"
              value={numberOfChildren}
              min={1}
              onChange={(e) => setNumberOfChildren(parseInt(e.target.value, 10))}
              className='w-full border-2 rounded-sm h-10 px-2'
            />
          </div>

          <div className='flex flex-col gap-1 w-full'>
            <label className='text-base font-semibold' >Trip Type:</label>
            <select
              value={tripType}
              onChange={(e) => setTripType(e.target.value as 'roundTrip' | 'oneWay')}
              className='w-full border-2 rounded-sm h-10 px-2'
            >
              <option value="roundTrip">Round Trip</option>
              <option value="oneWay">One Way</option>
            </select>
          </div>
        </div>



        <div>
          <button type="submit"  className='w-full border-2 rounded-sm h-10 px-2 bg-lime-400 hover:bg-lime-500 text-base font-bold'>Calculate Total Fees</button>
        </div>
      </form>

      {totalFees !== null && (
        <div className='text-xl font-bold flex justify-between gap-4 w-full'>
          <h2 className='w-full'>Total Bus Fees:</h2>
          <p className='w-full'>₦{totalFees}</p>
        </div>
      )}
    </div>
  );
};

export default BusServiceForm;
