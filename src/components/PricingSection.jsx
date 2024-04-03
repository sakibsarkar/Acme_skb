import React, { useState } from "react";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import BlueOkIcon from "../icons/BlueOkIcon";
import FastTimerIcon from "../icons/FastTimerIcon";
import FingerPrintIcon from "../icons/FingerPrintIcon";
import MouseClickIcon from "../icons/MouseClickIcon";
import PaperArrowUp from "../icons/PaperArrowUp";
import ScreenIcon from "../icons/ScreenIcon";
import SmallArrowRight from "../icons/SmallArrowRight";
import SpeedMeter from "../icons/SpeedMeter";
import SupportIcon from "../icons/SupportIcon";
import ThunderIcon from "../icons/ThunderIcon";
import { pricing } from "../mockData/pricing";
import Logo from "../utils/Logo";

const PricingSection = () => {
  const [selected, setSelected] = useState(pricing[0].id);

  return (
    <section className="p-12 border-t-[1px] border-primaryBorder">
      <h1 className="text-[32px] font-bold text-primary_dark mb-3">
        Our Pricing
      </h1>
      <div className="flex gap-5">
        <div className="flex-1 flex flex-col gap-[10px]">
          <div className="flex items-center gap-6 mb-12">
            <button className="min-w-[181px] max-w-[386px] min-h-[40px] rounded-[6px] px-10 py-3 border bg-primary_dark text-white">
              Get 2 months free (switch to yearly)
            </button>
            <div className="flex items-center gap-3 text-[14px]">
              Compare
              <SmallArrowRight />
            </div>
          </div>

          {pricing.map((price) => (
            <div
              className={`shadow-lg group cursor-pointer ${
                price.id === selected ? "selectedBg" : "bg-white"
              } rounded-[12px] pl-[40px] pr-[30px] py-[20px] flex justify-between items-center border border-gray-200 hover:border-cardBlue`}
              onClick={() => setSelected(price.id)}
              key={price.id}
            >
              <p className="">
                <span className="text-[32px] font-bold text-primaryColor">
                  {price.price}
                </span>
                <span className="text-bannerText text-[16px]">/mo</span>
              </p>
              <ul className="flex gap-3">
                {price.service.map((ser, i) => (
                  <li
                    className={`${
                      i !== 0 ? "border-l-[1px] px-[8px] " : "pr-[8px]"
                    } border-primary_dark text-[14px]`}
                    key={i + "blah"}
                  >
                    {ser}
                  </li>
                ))}
              </ul>
              {selected === price.id ? (
                <BlueOkIcon />
              ) : (
                <div className="h-5 w-5 rounded-full border-[2px] border-[#374151] group-hover:bg-[#0070F3]"></div>
              )}
            </div>
          ))}
        </div>
        <div className="lg:min-w-[356px] bg-white rounded-[12px] border p-8 flex flex-col gap-[6px] shadow-lg">
          <div className="mb-8">
            <Logo />
          </div>
          <div className="flex flex-col gap-[6px]">
            <div className="flex items-center gap-[6px] text-[12px] text-lightDark">
              <SpeedMeter />
              AMD Ryzen Processors
            </div>
            <div className="flex items-center gap-[6px] text-[12px] text-lightDark">
              <FastTimerIcon />
              1-10 GBps Network
            </div>
            <div className="flex items-center gap-[6px] text-[12px] text-lightDark">
              <MouseClickIcon />
              24/7 access to control panel
            </div>
            <div className="flex items-center gap-[6px] text-[12px] text-lightDark">
              <ScreenIcon />
              Windows or Linux
            </div>
            <div className="flex items-center gap-[6px] text-[12px] text-lightDark">
              <SupportIcon />
              24/7 support
            </div>
            <div className="flex items-center gap-[6px] text-[12px] text-lightDark">
              <PaperArrowUp />
              London & Tokyo data centers
            </div>
            <div className="flex items-center gap-[6px] text-[12px] text-lightDark">
              <FingerPrintIcon />
              Military grade encryption
            </div>
            <div className="flex items-center gap-[6px] text-[12px] text-lightDark">
              <ThunderIcon />
              Instant activation
            </div>
          </div>
          <div className="mt-auto">
            <button className="flex items-center justify-between gap-10 w-full min-w-[181px] max-w-[386px] min-h-[40px] rounded-[6px] px-10 py-3 border bg-primary_dark text-white">
              Deploy Server
              <ArrowLeftIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="text-[#6B7280] text-[14px] text-center mt-[30px]">
        *All pricing is in USD and renews automatically unless cancelled.
      </div>
    </section>
  );
};

export default PricingSection;
