import React from "react";

const Ending = () => {
  return (
    <section className="flex border-t-[1px] border-primaryBorder">
      <div className="flex-1 py-12 pl-[48px] pr-[30px]">
        <h1 className="text-[24px] max-w-[499px] text-[#666] tracking-tighter-[-0.96px] leading-[32px]">
          <span className="font-[600] text-primary_dark">Ready to profit?</span>{" "}
          Start journaling your trades. Check out
          <span className="font-[500] text-primary_dark">
            {" "}
            VPS Lite
          </span> or <span className="text-[#0068D6]">VPS Pro</span> or{" "}
          <span className="text-[#7820BC]">VPS Max</span>
        </h1>
        <div className="flex items-center gap-4 mt-6">
          <button className=" max-w-[386px] min-h-[40px] rounded-[6px] px-[16px] py-[10px] border bg-primary_dark text-white font-[500] text-[14px]">
            Deploy Now
          </button>
          <button className="min-w-[181px] max-w-[386px] min-h-[40px] rounded-[6px] px-[16px] py-[10px] border bg-white text-primary_dark text-[14px]">
            View Dedicated Servers
          </button>
        </div>
      </div>
      <div className="max-w-[358px] p-12 border-l border-primaryBorder">
        <h1 className="text-[#666] mb-6 text-[16px] max-w-[496px] tracking-tighter-[-0.96px] leading-[24px]">
          <span className="text-primary_dark font-semibold">Trial acme</span> to
          see how our performance and ease of use through our Control Panel.
        </h1>
        <button className=" min-w-[181px] max-w-[386px] min-h-[40px] rounded-[6px] px-[16px] py-[10px] border bg-white text-primary_dark text-[14px] font-[500]">
          Money Back Guarauntee
        </button>
      </div>
    </section>
  );
};

export default Ending;
