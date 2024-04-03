import React from "react";

const Header = () => {
  return (
    <header>
      <div className="flex w-full flex-col ">
        <div className="bg-darker_bg h-[40px] center text-white gap-[120px]">
          <p className="text-[14px] font-[400]">Restocked Today</p>
          <div className="center gap-[5px] px-[12px] border-l-[1px] border-[#3a3a3c]">
            <p className="text-[14px] font-[400]">Read more</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
