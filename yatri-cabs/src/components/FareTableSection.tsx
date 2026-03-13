import React from 'react';

export default function FareTableSection() {
  const tableData = [
    {
      carType: "AC Sedans",
      models: "Etios, Amaze, Dzire etc.",
      passengers: "4 Pax",
      idealFor: "Comfortable trips with small families",
      fare: "Rs.11/KM"
    },
    {
      carType: "AC Hatchbacks",
      models: "Wagon R, Celerio, Micra etc.",
      passengers: "4 Pax",
      idealFor: "Budget trips over short distances",
      fare: "Rs.11/KM"
    },
    {
      carType: "AC SUV",
      models: "Ertiga, Xylo etc.",
      passengers: "6-7 Pax",
      idealFor: "Premium trips with large families",
      fare: "Rs.13/KM"
    }
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-0 w-full overflow-hidden">
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left" style={{ borderCollapse: 'separate', borderSpacing: '8px 0' }}>
          <thead>
            <tr>
              <th className="bg-[#1a4d07] text-white font-bold text-[14px] md:text-[16px] py-4 px-6 text-center uppercase tracking-tight w-[15%]">
                CAR TYPE
              </th>
              <th className="bg-[#1a4d07] text-white font-bold text-[14px] md:text-[16px] py-4 px-6 text-center uppercase tracking-tight w-[25%]">
                MODEL INCLUDES
              </th>
              <th className="bg-[#1a4d07] text-white font-bold text-[14px] md:text-[16px] py-4 px-6 text-center uppercase tracking-tight w-[15%]">
                PASSENGERS
              </th>
              <th className="bg-[#1a4d07] text-white font-bold text-[14px] md:text-[16px] py-4 px-6 text-center uppercase tracking-tight w-[35%]">
                IDEAL FOR
              </th>
              <th className="bg-[#1a4d07] text-white font-bold text-[14px] md:text-[16px] py-4 px-6 text-center uppercase tracking-tight w-[10%]">
                FARE
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td className="bg-[#daf1cd] text-[#4b5563] text-[20px] font-medium py-6 px-6">
                  {row.carType}
                </td>
                <td className="bg-[#daf1cd] text-[#4b5563] text-[20px] font-medium py-6 px-6 relative">
                  <div style={{ position: 'absolute', top: 0, bottom: 0, left: '-4px', width: '4px', backgroundColor: 'white' }}></div>
                  {row.models}
                </td>
                <td className="bg-[#daf1cd] text-[#4b5563] text-[20px] font-medium py-6 px-6 text-center relative">
                  <div style={{ position: 'absolute', top: 0, bottom: 0, left: '-4px', width: '4px', backgroundColor: 'white' }}></div>
                  {row.passengers}
                </td>
                <td className="bg-[#daf1cd] text-[#4b5563] text-[20px] font-medium py-6 px-6 relative">
                  <div style={{ position: 'absolute', top: 0, bottom: 0, left: '-4px', width: '4px', backgroundColor: 'white' }}></div>
                  {row.idealFor}
                </td>
                <td className="bg-[#daf1cd] text-[#4b5563] text-[20px] font-medium py-6 px-6 text-center relative">
                  <div style={{ position: 'absolute', top: 0, bottom: 0, left: '-4px', width: '4px', backgroundColor: 'white' }}></div>
                  {row.fare}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
