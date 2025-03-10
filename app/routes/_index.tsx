import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { EmailIcon } from "~/shared/icons/EmailIcon";
import { CallIcon } from "~/shared/icons/CallIcon";
import {
  FaHardHat,
  FaBuilding,
  FaPencilRuler,
  FaTruckMoving,
  FaTools,
  FaHandHoldingUsd,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import { ServiceCard } from "~/components/ServiceCard";
import { Footer } from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Mpoza Holdings" },
    { name: "description", content: "Welcome to Mpoza holdings" },
  ];
};

// Home page
export default function Index() {
  const backgroundImages = [
    "images/building.png",
    "images/site.png",
    "images/track.png",
    "images/tractor.png",
    "images/tractors.png",
  ];

  return (
    <div className="w-full text-gray-800">
      {/* Header */}
      <header
        className="w-full h-screen flex flex-col"
        style={{
          backgroundImage: `url(${backgroundImages[4]})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        {/* Top Bar */}
        <div
          className="w-full flex items-center justify-between gap-8
           px-4 sm:px-8 py-2 border-b-[1px] border-gray-300 bg-gray-50/95"
        >
          <Link to="/">Mpoza Holdings</Link>
          <div className="flex items-center justify-center gap-8 z-10">
            {contacts.map((contact, index) => (
              <div
                className="flex items-center justify-center gap-2"
                key={index}
              >
                <span
                  className="w-10s h-10s w-8 h-8  border-[1px] border-green-500
                  rounded-[50%] flex items-center justify-center"
                >
                  {contact.icon}
                </span>
                <span className="text-blue-700 font-lights">
                  {contact.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <nav
          className="w-full flex items-center justify-between gap-8
           px-4 sm:px-8 py-2 lg:px-8 bg-yellow-200/80"
        >
          <Link to="/">Home</Link>
          <div className="flex items-center justify-center gap-4">
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </nav>

        {/* Header Content */}
        <div
          className="flex-1 w-full flex justify-center items-center
            bg-gray-50/95"
        >
          <div className="flex  justify-center items-center w-full px-4">
            <div className="flex flex-col w-4/5 justify-center gap-4">
              <h1 className="text-5xl">
                Building the Future, One Brick at a Time
              </h1>
              <h4 className="text-lg">
                Delivering top-quality construction solutions with unmatched
                precision, exceptional expertise, and groundbreaking innovation.
              </h4>
              <Link
                to="/contact"
                className="text-lg bg-yellow-500 inline-block w-32 text-center
                 px-4 py-2 text-white rounded-3xl"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="w-full h-full bg-purple-500s py-4">
            <img
              src={backgroundImages[4]}
              className="object-cover bg-center w-full h-full"
              style={{
                clipPath:
                  "polygon(0% 0%, 100% 0%, 100% 50%, 100% 50%, 100% 50%, 100% 100%, 0% 100%, 10% 50%)",
              }}
            />
          </div>
        </div>
      </header>

      {/* services */}
      <div
        className="px-4 sm:px-8 py-16 flex flex-col items-center justify-center
         text-lg gap-12 w-full"
      >
        <div className="w-full text-center relative bg-transparent z-20">
          <p className="uppercase text-gray-800 font-semibold text-5xl opacity-10">
            Our services
          </p>
          <p
            className="text-yellow-700 font-semibold uppercase
              text-center absolute top-[10px] left-0 right-0 z-0"
          >
            Our services
          </p>
        </div>
        <div className="w-full gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {constructionServices.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              content={service.content}
            />
          ))}
        </div>
      </div>
      {/* Gallery */}
      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

const contacts = [
  {
    text: "mpozaholdings@gmail.com",
    icon: <EmailIcon className="w-4 h-4" />,
  },
  {
    text: "+256 763 385 894",
    icon: <CallIcon className="w-4 h-4" />,
  },
];

const constructionServices = [
  {
    icon: (
      <IconContext.Provider
        value={{
          size: "1.4rem",
          color: "#f8f9fa",
        }}
      >
        <FaHardHat />
      </IconContext.Provider>
    ),
    title: "Project Planning & Management",
    content: `Comprehensive planning and 
              management to ensure smooth 
              project execution from start to finish`,
  },
  {
    icon: (
      <IconContext.Provider
        value={{
          size: "1.6rem",
          color: "#f8f9fa",
        }}
      >
        <FaBuilding />
      </IconContext.Provider>
    ),
    title: "Commercial & Residential Construction",
    content: `High-quality construction for 
              commercial buildings, homes, and 
              infrastructure projects`,
  },
  {
    icon: (
      <IconContext.Provider
        value={{
          size: "1.4rem",
          color: "#f8f9fa",
        }}
      >
        <FaPencilRuler />
      </IconContext.Provider>
    ),
    title: "Architectural Design & Engineering",
    content: `Expert design and engineering 
              services to create sustainable 
              and functional structures`,
  },
  {
    icon: (
      <IconContext.Provider
        value={{
          size: "1.4rem",
          color: "#f8f9fa",
        }}
      >
        <FaTruckMoving />
      </IconContext.Provider>
    ),
    title: "Logistics & Material Supply",
    content: `Efficient transportation and 
              supply of construction materials 
              to project sites`,
  },
  // {
  //   icon: (
  //     <IconContext.Provider
  //       value={{
  //         size: "1.4rem",
  //         color: "#f8f9fa",
  //       }}
  //     >
  //       <FaTools />
  //     </IconContext.Provider>
  //   ),
  //   title: "Renovation & Remodeling",
  //   content: `Transforming existing spaces
  //             with modern renovation and
  //             remodeling solutions`,
  // },
  // {
  //   icon: (
  //     <IconContext.Provider
  //       value={{
  //         size: "1.4rem",
  //         color: "#f8f9fa",
  //       }}
  //     >
  //       <FaHandHoldingUsd />
  //     </IconContext.Provider>
  //   ),
  //   title: "Cost Estimation & Budgeting",
  //   content: `Accurate cost estimation and
  //             budget planning for construction
  //             projects of all sizes`,
  // },
];
