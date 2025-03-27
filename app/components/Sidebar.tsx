import { Link } from "@remix-run/react";
import React from "react";
import { FiX } from "react-icons/fi";
import { CallIcon } from "~/shared/icons/CallIcon";
import { EmailIcon } from "~/shared/icons/EmailIcon";

export const Sidebar: React.FC = () => {
  const closeSideBarHandler = () => {
    document!.getElementById("sidebar")!.style.right = "-256px";
  };

  return (
    <aside
      className="w-64 fixed top-0 -right-64 z-[1000] h-screen overflow-x-hidden 
      bg-blue-500 text-gray-50 text-sm flex flex-col justify-between gap-8
      transition-all duration-500"
      id="sidebar"
    >
      <FiX
        size={24}
        onClick={() => closeSideBarHandler()}
        className="absolute top-2 left-3 cursor-pointer text-gray-50
        hover:text-yellow-600"
      />
      <div
        className="w-full flex flex-col items-start justify-center gap-4 
         px-4 mt-16"
      >
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact-us">Contact Us</Link>
      </div>
      <div
        className="w-full border-t-[1px] border-gray-400 p-4
         flex flex-col gap-3 justify-center"
      >
        {contacts.map((contact, index) => (
          <div className="flex items-center justify-centers gap-2" key={index}>
            <span className="flex items-center justify-center">
              {contact.icon}
            </span>
            <span className="text-gray-50">{contact.text}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};

const contacts = [
  {
    text: "mpozaholdings@gmail.com",
    icon: <EmailIcon className="w-5 h-5 text-gray-50" />,
  },
  {
    text: "+256 763 385 894",
    icon: <CallIcon className="w-5 h-5 text-gray-50" />,
  },
];
