import React from "react";

const HeroSection = () => {
  return (
    <section className="h-[300px] sm:h-[350px] lg:h-[450px] object-cover bg-white flex items-center justify-center w-full">
      <div className="px-[10px]">
        <h1 className="text-primary_dark text-center text-[20px] sm:text-[27px] md:text-[40px] font-[600] max-w-4xl sm:tracking-[-2.4px] sm:leading-[48px]">
          Lorem Ipsum.
          <span className="text-[#666666] font-[500]">
            Testing, testing,
            <br /> and testing on our fast, low latency hardware.
          </span>
        </h1>
        <div className="flex justify-center gap-[24px] mt-[32px] flex-wrap">
          <button className="flex items-center gap-[6px] justify-center min-w-[181px] max-w-[386px] min-h-[40px] rounded-[6px] px-[14.4px] py-[12px] border bg-primary_dark text-white">
            <img src="/logo.png" className="w-[14.5px] h-[16.6px]" />
            Lorem Ipsum
          </button>
          <button className="min-w-[181px] max-w-[386px] min-h-[40px] rounded-[6px] px-10 py-3 border bg-white text-primary_dark">
            Lorem Ipsum
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
