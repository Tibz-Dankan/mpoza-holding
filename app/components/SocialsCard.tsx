import { Link } from "@remix-run/react";
import React from "react";
import { IconContext } from "react-icons";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsPinterest,
  BsTwitter,
} from "react-icons/bs";

export const SocialsCard: React.FC = () => {
  return (
    <div className="w-full space-y-4 bg-white py-4 px-6 pb-6 rounded-md shadow">
      <p className="text-xl font-medium italic font-serif text-center">
        Our Social Links
      </p>
      <div className="flex items-center justify-center gap-x-4">
        <span className="rounded-full p-2 bg-yellow-600">
          <Link to="#">
            <IconContext.Provider
              value={{
                size: "1.4rem",
                color: "#fff",
              }}
            >
              <BsFacebook />
            </IconContext.Provider>
          </Link>
        </span>
        <span className="rounded-full p-2 bg-yellow-600">
          <Link to="#">
            <IconContext.Provider
              value={{
                size: "1.4rem",
                color: "#fff",
              }}
            >
              <BsTwitter />
            </IconContext.Provider>
          </Link>
        </span>
        <span className="rounded-full p-2 bg-yellow-600">
          <Link to="#">
            <IconContext.Provider
              value={{
                size: "1.4rem",
                color: "#fff",
              }}
            >
              <BsInstagram />
            </IconContext.Provider>
          </Link>
        </span>
        <span className="rounded-full p-2 bg-yellow-600">
          <Link to="#">
            <IconContext.Provider
              value={{
                size: "1.4rem",
                color: "#fff",
              }}
            >
              <BsPinterest />
            </IconContext.Provider>
          </Link>
        </span>
        <span className="rounded-full p-2 bg-yellow-600">
          <Link to="#">
            <IconContext.Provider
              value={{
                size: "1.3rem",
                color: "#fff",
              }}
            >
              <BsLinkedin />
            </IconContext.Provider>
          </Link>
        </span>
      </div>
    </div>
  );
};
