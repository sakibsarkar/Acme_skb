import React from "react";
import ArrowLeft from "../icons/ArrowLeft";

const GotoPlans = () => {
  const shadow = {
    boxShadow:
      "0px 0px 0px 1px rgba(0, 0, 0, 0.08), 0px 2px 2px 0px rgba(0, 0, 0, 0.04)",
  };
  return (
    <section className="flex justify-center items-center gap-3 py-[3px] w-full mt-[9px]">
      <button className="bg-[#d4f7f0] text-[12px] font-[500] py-[5px] px-[10px] rounded-full text-[#067a6e] center">
        <img src="/party.png" />
        New
      </button>
      <h1 className="font-[500] text-[13.67px]">
        Get 2 months free with annual plans!
      </h1>
      <button
        className="border rounded-full py-[6px] px-[12px] min-h-[32px] center gap-[4px] bg-white text-primary_dark"
        style={shadow}
      >
        Claim Promotion
        <ArrowLeft />
      </button>
    </section>
  );
};

export default GotoPlans;
