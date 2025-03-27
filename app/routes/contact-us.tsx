import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Footer } from "~/components/Footer";
import { Sidebar } from "~/components/Sidebar";
import { SidebarMenuIcon } from "~/components/SidebarMenuIcon";
import { ContactContentLayout } from "~/components/ContactUSContentLayout";

export const meta: MetaFunction = () => {
  return [
    { title: "Mpoza Holdings" },
    { name: "description", content: "Welcome to Contact Us" },
  ];
};

// Contact-us page
export default function ContactUs() {
  const backgroundImages = [
    "images/building.png",
    "images/site.png",
    "images/track.png",
    "images/tractor.png",
    "images/tractors.png",
  ];

  return (
    <div className="w-full text-gray-800 overflow-x-hidden bg-gray-200">
      {/* Sidebar */}
      <Sidebar />
      {/* Header */}
      <header
        className="w-full h-[70vh] flex flex-col"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Navigation */}
        <nav
          className="flex items-center justify-between gap-8 px-4 
          sm:px-8 py-6 lg:px-8 bg-white"
        >
          <Link to="/">Mpoza Holdings</Link>
          <div className="hidden sm:flex items-center justify-center gap-4">
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact-us">Contact Us</Link>
          </div>
          <div className="w-fulls flex-1 flex items-center justify-end gap-2 sm:hidden">
            <span className="">
              <SidebarMenuIcon />
            </span>
          </div>
        </nav>

        {/* Header Content */}
        <div
          className="flex-1 w-full flex justify-center items-center
            bg-gray-50/95"
          style={{
            backgroundImage: `linear-gradient(
                to right,
                hsl(210,10.8%,14.5%, 0.2),
                hsl(210,10.8%,14.5%, 0.6),
                hsl(210,10.8%,14.5%, 0.2)
              ), url(${backgroundImages[0]})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full flex justify-center items-center  px-4">
            <div className="w-full  flex flex-col justify-center items-center gap-8 sm:gap-4">
              <h1
                className="text-3xl sm:text-4xl text-center
                italic font-serif font-semibold text-white"
              >
                Building the Future, One Brick at a Time
              </h1>
              <h4
                className="text-sm sm:text-base text-center
                text-white"
              >
                Get started with exceptional expertise, and groundbreaking
                innovation.
              </h4>
            </div>
          </div>
        </div>
      </header>

      {/* Contact us Content */}
      <ContactContentLayout />

      {/* Footer */}
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
