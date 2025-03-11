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
import { MdVisibility } from "react-icons/md";
import { GiTargetShot } from "react-icons/gi";
import { TriangularLikeIcon } from "~/components/TriangularLikeIcon";
import { Gallery } from "~/components/Gallery";

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
                <span className="text-blue-700">{contact.text}</span>
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
                className="text-lg bg-yellow-600 inline-block w-32 text-center
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

      {/* About section */}
      <div className="w-full px-4 sm:px-8 py-16 flex flex-col md:flex-row gap-12">
        <div className="w-full aspect-[3/1.5] relative">
          <div
            className="w-3/5 md h-[70%] aspect-[3/4] rounded-xl
             absolute top-0 left-0 bg-yellow-800/85"
            style={{
              backgroundImage: `url(${backgroundImages[0]})`,
              backgroundSize: "cover",
              objectFit: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div
            className="w-3/5 h-[70%] aspect-[3/4] rounded-xl
             absolute bottom-0 right-0 bg-yellow-800/85"
            style={{
              backgroundImage: `url(${backgroundImages[3]})`,
              backgroundSize: "cover",
              objectFit: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
        <div
          className="w-full flex flex-col md:flex-row items-center
          justify-center gap-4"
        >
          <div className="w-full flex flex-col gap-4">
            <p className="flex items-center gap-2">
              <span>
                <IconContext.Provider
                  value={{
                    size: "1.4rem",
                    color: "#a16207",
                  }}
                >
                  <FaBuilding />
                </IconContext.Provider>
              </span>
              <span className="text-yellow-700 italic text-xl font-semibold">
                About Us
              </span>
            </p>
            <p>
              Mpoza Holdings (U) Limited is a diversified company dedicated to
              excellence in energy, construction, and manufacturing. Based in
              Uganda, we are committed to delivering sustainable and innovative
              solutions that meet the needs of our clients while advancing
              global sustainability goals.
            </p>
          </div>
          <div
            className="w-full flex flex-col sm:flex-rows justify-center
             items-center sm:items-start gap-4"
          >
            <div className="w-full flex flex-col gap-4">
              <p className="flex items-center gap-2">
                <span>
                  <IconContext.Provider
                    value={{
                      size: "1.4rem",
                      color: "#a16207",
                    }}
                  >
                    <MdVisibility />
                  </IconContext.Provider>
                </span>
                <span className="text-yellow-700 italic text-xl font-semibold">
                  Vision
                </span>
              </p>
              <p>
                To be a leading provider of sustainable business solutions,
                transforming industries and empowering communities globally.
              </p>
            </div>
            <div className="w-full flex flex-col gap-4">
              <p className="flex items-center gap-2">
                <span>
                  <IconContext.Provider
                    value={{
                      size: "1.4rem",
                      color: "#a16207",
                    }}
                  >
                    <GiTargetShot />
                  </IconContext.Provider>
                </span>
                <span className="text-yellow-700 italic text-xl font-semibold">
                  Mission
                </span>
              </p>
              <p>
                To drive growth and innovation through quality service delivery,
                environmental stewardship, and strategic partnerships.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* services */}
      <div
        className="px-4 sm:px-8 py-8 pt-6 flex flex-col items-center justify-center
         text-lg gap-8 w-full bg-gray-100"
      >
        <div className="w-full flex flex-col items-center justify-center gap-2">
          <p className="text-yellow-600 text-xl italic font-semibold  text-center">
            Our services
          </p>
          <TriangularLikeIcon />
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
      <div
        className="px-4 sm:px-8 py-8 pt-6 flex flex-col items-center justify-center
         gap-8 w-full"
      >
        <div className="w-full flex flex-col items-center justify-center gap-2">
          <p className="flex flex-col font-semibold text-center">
            <span className="text-yellow-900 text-base">Explore Our</span>
            <span className="text-yellow-600 text-xl italic">Gallery</span>
          </p>
          <TriangularLikeIcon />
        </div>
        <div className="w-full">
          <Gallery />
        </div>
      </div>
      {/* Footer */}
      <div className="mt-8">
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
