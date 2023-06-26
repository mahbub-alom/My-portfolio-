import React from 'react';

import { BiHomeAlt, BiUser, BiBookOpen } from "react-icons/bi";
import {
  BsBriefcase,
  BsChatSquareText,
  BsClipboardData,
} from "react-icons/bs";

import {Link}from 'react-scroll'


const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            to="home"
            className="cursor-pointer w-[60px] flex items-center justify-center"
          >
            <BiHomeAlt></BiHomeAlt>
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="about"
            className=" cursor-pointer w-[60px] flex items-center justify-center"
          >
            <BiUser></BiUser>
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="services"
            className="cursor-pointer w-[60px] flex items-center justify-center"
          >
            <BsClipboardData></BsClipboardData>
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="work"
            className="cursor-pointer w-[60px] flex items-center justify-center"
          >
            <BsBriefcase></BsBriefcase>
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="contact"
            className="cursor-pointer w-[60px] flex items-center justify-center"
          >
            <BsChatSquareText></BsChatSquareText>
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="myallprojects"
            className="cursor-pointer w-[60px] flex items-center justify-center"
          >
            <BiBookOpen></BiBookOpen>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
