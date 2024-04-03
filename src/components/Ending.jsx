import React from "react";

const Ending = () => {
  return (
    <section className="flex border-t-[1px] border-primaryBorder">
      <div className="flex-1 p-12">
        <h1 className="text-[24px] max-w-2xl text-[#666]">
          <span className="font-bold text-primary_dark">Ready to profit?</span>{" "}
          Start journaling your trades. Check out
          <span className="font-semibold text-primary_dark">
            {" "}
            VPS Lite
          </span> or <span className="text-cardBlue">VPS Pro</span> or{" "}
          <span className="text-cardBlue">VPS Max</span>
        </h1>
        <div className="flex items-center gap-4 mt-6">
          <button className="min-w-[181px] max-w-[386px] min-h-[40px] rounded-[6px] px-10 py-3 border bg-primary_dark text-white">
            Deploy Now
          </button>
          <button className="undefined min-w-[181px] max-w-[386px] min-h-[40px] rounded-[6px] px-10 py-3 border bg-white text-primary_dark">
            View Dedicated Servers
          </button>
        </div>
      </div>
      <div className="max-w-[358px] p-12 border-l border-borderColor">
        <h1 className="text-bannerText mb-6">
          <span className="text-primary_dark font-semibold">Trial acme</span> to
          see how our performance and ease of use through our Control Panel.
        </h1>
        <button className="undefined min-w-[181px] max-w-[386px] min-h-[40px] rounded-[6px] px-10 py-3 border bg-white text-primary_dark">
          Money Back Guarantee
        </button>
      </div>
    </section>
  );
};

export default Ending;
