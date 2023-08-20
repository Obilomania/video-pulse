"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../../../public/assets/logo.png";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import {
  AiOutlineYoutube,
  AiOutlineTwitter,
  AiFillFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import "./Header.css";

const Header = () => {
  const [navigation, setNavigation] = useState(false);
  const toggleNav = () => setNavigation(!navigation);
  return (
    <div className="navBar">
      <div className="logo">
        <Link href={"/"}>
          <Image src={Logo} alt="" />
        </Link>
      </div>
      <div
        className={!navigation ? "overlayClose" : "overlay"}
        onClick={toggleNav}
      ></div>
      <div className={!navigation ? "navClose" : "navigation"}>
        <Link href={"/"} onClick={toggleNav}>
          Home
        </Link>
        <Link href={"/"} onClick={toggleNav}>
          About
        </Link>
        <Link href={"/"} onClick={toggleNav}>
          Services
        </Link>
        <Link href={"/"} onClick={toggleNav}>
          Contact
        </Link>
        <div className="socials">
          <Link href={"/"} onClick={toggleNav}>
            <AiOutlineYoutube size={25} />
          </Link>
          <Link href={"/"} onClick={toggleNav}>
            <AiOutlineTwitter size={25} />
          </Link>
          <Link href={"/"} onClick={toggleNav}>
            <AiFillFacebook size={25} />
          </Link>
          <Link href={"/"} onClick={toggleNav}>
            <AiOutlineInstagram size={25} />
          </Link>
          <Link href={"/"} onClick={toggleNav}>
            <BiPhoneCall size={25} />
          </Link>
        </div>
      </div>
      <div className="hamburger" onClick={toggleNav}>
        <p className="cursor-pointer">
          <HiMenuAlt3  />
        </p>
      </div>
    </div>
  );
};

export default Header;
