import React from 'react';

export default function FullLoader() {
  return (
    <div className="w-screen h-screen z-[1000] fixed top-0 left-0 bg-background flex items-center justify-center flex-col">
      <div className="h-[80px] w-[80px] relative  bg-[conic-gradient(transparent,var(--brand))]   rounded-full flex items-center justify-center animate-spin before:content-[''] before:absolute before:h-[75%] z-[1100] before:w-[75%] before:rounded-full before:bg-background"></div>
      {/* <div className="h-[80px] w-[80px] relative bg-gray-200 bg-[conic-gradient(transparent, #00f8ff)] bg-[conic-gradient(#9233ea,#db2777,#2564eb)] rounded-full flex items-center justify-center animate-spin before:content-[''] before:absolute before:h-[75%] z-[1100] before:w-[75%] before:rounded-full before:bg-background">
      </div> */}
    </div>
  );
}
