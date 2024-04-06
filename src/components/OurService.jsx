import React from "react";
import { services } from "../mockData/service";

const OurService = () => {
  const shadow = {
    boxShadow:
      "0px 0px 0px 1px rgba(0, 0, 0, 0.08), 0px 2px 2px 0px rgba(0, 0, 0, 0.04",
  };

  return (
    <section className="flex px-[10px] sm:px-[25px] py-[48px] lg:p-[48px] justify-center items-center gap-[24px] lg:flex-row flex-col">
      <h1 className="text-[24px] font-[600]">Our Servers:</h1>

      <div className="center gap-[16px] flex-wrap">
        {services.map(({ title, id, Icon }, i) => (
          <button
            key={id}
            style={shadow}
            className="border rounded-full py-[10px] pl-[10px] pr-[16px] min-h-[32px] flex items-center justify-center text-[14px] font-[500] gap-[6px] bg-white text-primary_dark"
          >
            <Icon />
            {title}
          </button>
        ))}
      </div>
    </section>
  );
};

export default OurService;
