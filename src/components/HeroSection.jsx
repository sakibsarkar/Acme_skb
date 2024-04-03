import React from "react";

const HeroSection = () => {
  return (
    <section className="lg:min-h-[450px] object-cover bg-white flex items-center justify-center w-full">
      <div>
        <h1 className="text-primary_dark text-center text-[40px] font-[600] max-w-4xl">
          Lorem Ipsum.
          <span className="text-[#666666] font-[500]">
            Testing, testing, and testing on our fast, low latency hardware.
          </span>
        </h1>
        <div className="flex justify-center gap-6 mt-[32px]">
          <button className="flex items-center gap-3 justify-center min-w-[181px] max-w-[386px] min-h-[40px] rounded-[6px] px-10 py-3 border bg-primary_dark text-white">
            <img src="/logo.png" />
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
