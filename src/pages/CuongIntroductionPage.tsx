import { useEffect, useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import cuong from '../assets/cuong.png';
import BlueChair from '../assets/images/BlueChair.png';

function CuongIntroductionPage() {
  return (
    <div className="w-full h-screen bg-brown_lighter">
      <div className="w-[500px] h-[500px] flex justify-center items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-white border-[4px]">
        <div className="w-2/3 h-2/3 border-[4px] border-white rounded-full"></div>
      </div>
      <div className="w-full h-full flex justify-center items-end absolute top-0 left-0 z-10">
        <img src={cuong} alt="cuong" className="w-fit h-fit object-contain" />
      </div>
      <div className="h-full pl-10 grid grid-cols-2 relative z-20">
        <div className="w-2/3 h-full flex flex-col justify-center items-start">
          <p className="text-[30px]">Hello, I'm</p>
          <p className="text-[40px] font-bold mb-5">NGUYEN CHI CUONG</p>
          <p className="text-[15px]">
            Design with 12 years experience sketching, building and coaching. I
            love fun UI, collaboration and making helpful products that connect
            people.
          </p>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-end relative z-20">
          <div className="w-full max-w-[20%] flex flex-col gap-2 overflow-hidden absolute top-[10%] left-1/2 -translate-x-1/2">
            <img
              src={BlueChair}
              alt="furniture"
              className="w-full object-cover rounded-2xl border-[3px] border-white"
            />
            <div className="w-full px-2 py-2 text-[15px] flex justify-center items-center rounded-xl bg-white">
              UX/UI Designer
            </div>
          </div>
          <div className="w-full max-w-[20%] flex flex-col gap-2 overflow-hidden absolute top-1/2 -translate-y-1/2 left-1/2 translate-x-full">
            <img
              src={BlueChair}
              alt="furniture"
              className="w-full object-cover rounded-2xl border-[3px] border-white"
            />
            <div className="w-full px-2 py-2 text-[15px] flex justify-center items-center rounded-xl bg-white">
              UX/UI Designer
            </div>
          </div>
          <div className="w-full max-w-[20%] flex flex-col gap-2 overflow-hidden absolute bottom-[10%] left-1/2 -translate-x-1/2">
            <img
              src={BlueChair}
              alt="furniture"
              className="w-full object-cover rounded-2xl border-[3px] border-white"
            />
            <div className="w-full px-2 py-2 text-[15px] flex justify-center items-center rounded-xl bg-white">
              UX/UI Designer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CuongIntroductionPage;
