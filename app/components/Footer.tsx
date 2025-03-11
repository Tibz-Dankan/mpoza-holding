import React, { Fragment } from "react";
import { IconContext } from "react-icons";
import {
  BsFacebook,
  BsTwitter,
  BsPinterest,
  BsInstagram,
} from "react-icons/bs";
import { Link } from "@remix-run/react";

export const Footer: React.FC = () => {
  const backgroundImages = [
    "images/building.png",
    "images/site.png",
    "images/track.png",
    "images/tractor.png",
    "images/tractors.png",
  ];
  return (
    <Fragment>
      <footer
        className="w-full bg-gray-100"
        style={{
          backgroundImage: `url(${backgroundImages[3]})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "auto",
        }}
      >
        <div
          className="w-full bg-yellow-700/95 py-8 text-gray-100 grid 
       place-items-center gap-9 px-2 sm:px-8"
        >
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 
           gap-8 w-full"
          >
            <div className="space-y-3 w-full">
              <span className="font-bold">Company</span>
              <ul className="space-y-3">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Our Projects</li>
                <li>Testimonials</li>
              </ul>
            </div>
            <div className="space-y-3 w-full">
              <span className="font-bold">Services</span>
              <ul className="space-y-3">
                <li>Project Planning</li>
                <li>Commercial Construction</li>
                <li>Architectural Design</li>
                <li>Renovation & Remodeling</li>
              </ul>
            </div>
            <div className="space-y-3 w-full">
              <span className="font-bold">Resources</span>
              <ul className="space-y-3">
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Blog</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="space-y-3 w-full">
              <span className="font-bold">Quick Links</span>
              <ul className="space-y-3">
                <li>How We Work</li>
                <li>Our Portfolio</li>
                <li>Careers</li>
                <li>Get a Quote</li>
              </ul>
            </div>
          </div>
          <div
            className="w-full flex items-center justify-between
          gap-8 lg:gap-16"
          >
            <p className="w-full h-[3px] bg-gray-50 hidden sm:block"></p>
            <p className="flex items-center text-white">
              Copyright&copy;{new Date().getFullYear()}
            </p>
            <p className="flex items-center justify-start gap-x-4">
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
            </p>
            <p className="w-full h-[3px] bg-white hidden sm:block"></p>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};
