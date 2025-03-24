import React from "react";

import { assets } from "@/assets/assetimports";

const OurTeam = () => {
  return (
    <div>
      {" "}
      <h1 className="text-center text-blue-950  my-14 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
        Meet Our Team
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        <div className="bg-blue-50 p-4 border border-blue-950 rounded-lg">
          <div className="max-h-80 overflow-y-hidden">
            <img src={assets.tm3} alt="t1" />
          </div>
          <p className="text-center uppercase tracking-tight font-quickSand font-semibold text-xl my-6">
            Krunal Pitroda
          </p>
        </div>
        <div className="bg-blue-50 p-4 border border-blue-950 rounded-lg">
          <div className="max-h-80 overflow-y-hidden">
            <img src={assets.tm2} alt="t1" />
          </div>
          <p className="text-center uppercase tracking-tight font-quickSand font-semibold text-xl my-6">
            Laher Rathod
          </p>
        </div>
        <div className="bg-blue-50 p-4 border border-blue-950 rounded-lg">
          <div className="max-h-80 overflow-y-hidden">
            <img src={assets.tm1} alt="t1" />
          </div>
          <p className="text-center uppercase tracking-tight font-quickSand font-semibold text-xl my-6">
            Krunal Pitroda
          </p>
        </div>
        <div className="bg-blue-50 p-4 border border-blue-950 rounded-lg">
          <div className="max-h-80 overflow-y-hidden">
            <img src={assets.tm1} alt="t1" />
          </div>
          <p className="text-center uppercase tracking-tight font-quickSand font-semibold text-xl my-6">
            Krunal Pitroda
          </p>
        </div>
        {/* <div className='bg-blue-50 p-4 border border-blue-950 rounded-lg'>
          <div className='max-h-80 overflow-y-hidden'>
            <img src={assets.tm1} alt='t1' />
          </div>
          <p className='text-center uppercase tracking-tight font-quickSand font-semibold text-xl my-6'>
            Krunal Pitroda
          </p>
        </div>
        <div className='bg-blue-50 p-4 border border-blue-950 rounded-lg'>
          <div className='max-h-80 overflow-y-hidden'>
            <img src={assets.tm1} alt='t1' />
          </div>
          <p className='text-center uppercase tracking-tight font-quickSand font-semibold text-xl my-6'>
            Krunal Pitroda
          </p>
        </div>
        <div className='bg-blue-50 p-4 border border-blue-950 rounded-lg'>
          <div className='max-h-80 overflow-y-hidden'>
            <img src={assets.tm1} alt='t1' />
          </div>
          <p className='text-center uppercase tracking-tight font-quickSand font-semibold text-xl my-6'>
            Krunal Pitroda
          </p>
        </div>
        <div className='bg-blue-50 p-4 border border-blue-950 rounded-lg'>
          <div className='max-h-80 overflow-y-hidden'>
            <img src={assets.tm1} alt='t1' />
          </div>
          <p className='text-center uppercase tracking-tight font-quickSand font-semibold text-xl my-6'>
            Krunal Pitroda
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default OurTeam;
