import { HiOutlineMenu } from "react-icons/hi";
import NavLinks from "../shared/NavLinks";
import Logo from "../utils/Logo";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="flex w-full flex-col ">
        <div className="center bg-primary_darker w-full ">
          <div className="h-[40px] center text-white gap-[21px]">
            <p className="text-[14px] font-[400]">Restocked Today</p>
            <div className="center gap-[5px] px-[12px] border-l-[1px] border-[#3a3a3c] sm:relative left-[85px]">
              <p className="text-[14px] font-[400]">Read more</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between px-[32px] py-[8px]">
          <div className="w-full  flex gap-[91.5px] items-center">
            <Logo />
            <div className="hidden lg:flex">
              <NavLinks />
            </div>
          </div>

          <div className="center gap-[6.5px] flex-shrink-0 hidden sm:flex">
            <a href="/" className="text-[14px] text-primary_darker">
              Login
            </a>
            <div className="py-[4.5px] px-[13px] center gap-[10px] border-[1px] border-[#E4E4E7] rounded-[5px]">
              <p className="text-[13.672px] text-primary_darker font-[400px]">
                Start Now
              </p>

              <div className="bg-primary_darker center pt-[5px] pb-[5.5px] px-[10px] cener gap-[6px] min-w-[126px] rounded-[6px]">
                <img src="/logo.png" className="w-[16px] h-[13px]" />
                <p className="text-white text-[13.672px] font-[400]">
                  Lorem Ipsum
                </p>
              </div>
            </div>
          </div>

          <div className="flex lg:hidden text-[25px] ml-[20px]">
            <HiOutlineMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
