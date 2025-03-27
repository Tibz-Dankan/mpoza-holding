import React from "react";
import { IconContext } from "react-icons";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { GoClock } from "react-icons/go";

export const ContactUsInfo: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-4 sm:pt-5 pb-5 sm:pb-0">
      {/* Office hours */}
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span>
            <IconContext.Provider
              value={{
                size: "24px",
                color: "#2b8a3e",
              }}
            >
              <GoClock />
            </IconContext.Provider>
          </span>
          <span className="text-xl">Office Hours</span>
        </div>
        <div className="text-sm pl-12">
          <span>Monday - Sunday: Open 24hours</span>
        </div>
      </div>

      {/* Address */}
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span>
            <IconContext.Provider
              value={{
                size: "24px",
                color: "#2b8a3e",
              }}
            >
              <IoLocationOutline />
            </IconContext.Provider>
          </span>
          <span className="text-xl">Our Address</span>
        </div>
        <div className="flex flex-col text-sm pl-12">
          <span>Freedom City Shopping Mall</span>
          <span>Freedom City Shopping Mall</span>
        </div>
      </div>

      {/* Contacts */}
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span>
            <IconContext.Provider
              value={{
                size: "24px",
                color: "#2b8a3e",
              }}
            >
              <IoMdCall />
            </IconContext.Provider>
          </span>
          <span className="text-xl">Our Contacts</span>
        </div>
        <div className="flex flex-col gap-2 text-sm pl-12">
          <span>Phone: +256763385894</span>
          <span>WhatsApp: +256763385894</span>
        </div>
      </div>

      {/* Email Address */}
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span>
            <IconContext.Provider
              value={{
                size: "24px",
                color: "#2b8a3e",
              }}
            >
              <MdOutlineEmail />
            </IconContext.Provider>
          </span>
          <span className="text-xl">Our Email Address</span>
        </div>
        <div className="flex flex-col gap-2 text-sm pl-12">
          <span>info@mpozaholdings.com</span>
          <span>mpozaholdings@gmail.com</span>
        </div>
      </div>
    </div>
  );
};
