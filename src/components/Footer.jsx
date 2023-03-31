import React from "react";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiOutlineWhatsApp,
  AiOutlinePhone,
  AiOutlineMessage,
} from "react-icons/ai";

import { CiLocationOn } from "react-icons/ci";
import { TfiAlarmClock } from "react-icons/tfi";
import { FaAppStore, FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-4/5 m-auto py-10 cursor-default ">
      <div className="md:flex md:justify-between sm:grid sm:grid-cols-2 sm:justify-center items-center my-10">
        <div className="space-y-5 py-5 border-b  " >
          <h1 className="text-3xl font-bold cursor-pointer">Habib</h1>
          <div className="flex space-x-5">
            <AiFillFacebook size={"1.5rem"} className="cursor-pointer" />
            <AiFillInstagram size={"1.5rem"} className="cursor-pointer" />
            <AiFillTwitterSquare size={"1.5rem"} className="cursor-pointer" />
            <AiOutlineWhatsApp size={"1.5rem"} className="cursor-pointer" />
          </div>
          <div className="flex items-center space-x-2">
            <AiOutlinePhone />
            <p>------------</p>
          </div>
          <div className="flex items-center space-x-2">
            <AiOutlineMessage />
            <p>------------</p>
          </div>
          <div className="flex items-center space-x-2">
            <CiLocationOn />
            <p>------------</p>
          </div>
          <div className="flex items-center space-x-2">
            <TfiAlarmClock />
            <p>------------</p>
          </div>
        </div>


       
      </div>
    </footer>
  );
};

export default Footer;
