import React from "react";
import { services } from "../mockData/service";

const OurService = () => {
  const shadow = {
    boxShadow:
      "0px 0px 0px 1px rgba(0, 0, 0, 0.08), 0px 2px 2px 0px rgba(0, 0, 0, 0.04",
  };

  return (
    <section class="flex p-12 justify-center items-center gap-[16px]">
      <h1 class="text-[24px] font-semibold">Our Services:</h1>

      <div className="center gap-[16px]">
        {services.map(({ title, id, Icon }, i) => (
          <button
            key={id}
            style={shadow}
            class="border rounded-full py-[10px] pl-[10px] pr-[16px] min-h-[32px] flex items-center justify-center text-[14px] font-[500] gap-[6px] bg-white text-primary_dark"
          >
            <Icon />
            Services
          </button>
        ))}
      </div>
    </section>
  );
};

export default OurService;
