import React from "react";
import ArrowDown from "../icons/ArrowDown";

const NavLinks = () => {
  return (
    <nav>
      <ul className="center gap-[24px]">
        <li className="center gap-[5px]">
          <a href="/" className="text-nav_link text-[14px] font-[500]">
            Pricing
          </a>
          <ArrowDown />
        </li>
        <li>
          <a href="/" className="text-nav_link text-[14px] font-[500]">
            Compatibility
          </a>
        </li>
        <li>
          <a href="/" className="text-nav_link text-[14px] font-[500]">
            Features
          </a>
        </li>
        <li>
          <a href="/" className="text-nav_link text-[14px] font-[500]">
            FAQ
          </a>
        </li>
        <li>
          <a href="/" className="text-nav_link text-[14px] font-[500]">
            Support
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
