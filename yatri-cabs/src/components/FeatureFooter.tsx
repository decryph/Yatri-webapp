import React from 'react';

export default function FeatureFooter() {
  return (
    <footer 
      className="bg-[#e9e9e9] rounded-[24px] relative z-20 shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-white mx-auto mb-8 -mt-12 flex items-center justify-center"
      style={{ 
        width: '1400px', 
        height: '103px', 
        gap: '20px',
        opacity: 1
      }}
    >
      <div className="w-full flex items-center justify-between px-10 divide-x divide-gray-300">
        <div className="flex-1 text-center">
          <h3 className="text-[24px] font-bold text-[#111] leading-tight">Transparent Billing</h3>
          <p className="text-[14px] text-[#555] font-medium leading-tight">GPS Based Billing | No Km Tampering</p>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <h3 className="text-[16px] font-bold text-[#111] mb-1">Download Now!</h3>
          <div className="flex space-x-2 items-center justify-center">
            <a href="#" className="block px-3 py-1 bg-black text-white text-xs rounded hover:bg-gray-800 transition-colors">
              Google Play
            </a>
            <a href="#" className="block px-3 py-1 bg-black text-white text-xs rounded hover:bg-gray-800 transition-colors">
              App Store
            </a>
          </div>
        </div>

        <div className="flex-1 text-center">
          <h3 className="text-[24px] font-bold text-[#111] leading-tight">No return fare</h3>
          <p className="text-[14px] text-[#555] font-medium leading-tight">Oneway Cab Fare I No Hidden Charges</p>
        </div>
      </div>
    </footer>
  );
}
