import React from "react";

const Logo = () => {
  const shadow = {
    boxShadow:
      "0px 0px 0px 1px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(255, 255, 255, 0.20) inset, 0px 6px 7px 0px rgba(255, 255, 255, 0.10) inset",
  };

  return (
    <div className="flex gap-[12px] items-center justify-start">
      <div
        className="w-[32px] h-[32px] rounded-[9px] center bg-primary_dark"
        style={shadow}
      >
        <img src="/logo.png" />
      </div>
      <div className="flex flex-col items-start justify-start gap-[2.7px]">
        <p className="text-[16px] text-primary_darker leading-[16px]">
          acme.com
        </p>
        <p className="leading-[16px] text-[12px] text-[#26262666]">
          By acme<span className="font-[700]">.com</span>
        </p>
      </div>
    </div>
  );
};

export default Logo;
