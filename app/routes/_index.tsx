import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { EmailIcon } from "~/shared/icons/EmailIcon";
import { CallIcon } from "~/shared/icons/CallIcon";

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
        // style={{
        //   backgroundImage: `linear-gradient(
        //     to right,
        //     hsl(210,10.8%,14.5%, 0.6),
        //     hsl(210,10.8%,14.5%, 0.3),
        //     hsl(210,10.8%,14.5%, 0.2)
        //   ), url(${backgroundImages[4]})`,
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        //   backgroundPosition: "center",
        //   width: "100%",
        //   height: "100vh",
        //   // height: "100%",
        // }}
      >
        {/* Top Bar */}
        <div
          className="w-full flex items-center justify-between gap-8
           px-4 sm:px-8 lg:px-8 py-2 border-b-[1px] border-gray-300
           bg-gray-50/80 z-10"
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
           px-4 sm:px-8 py-2 lg:px-8 bg-yellow-200/80 z-10"
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
          className="flex-1 w-full flex justify-center items-center bg-green-300s
          px-4s sm:px-8s py-2s lg:px-8s"
        >
          <div className="flex-col justify-center w-4/5s sm:w-1/2s md:w-1/3s w-full z-10">
            <h1 className="text-3xl">
              Building the Future, One Brick at a Time
            </h1>
            <h4>
              {/* Delivering top-quality construction solutions with precision,
              expertise, and innovation. */}
              {/* Delivering top-quality construction solutions with unmatched
              precision, exceptional expertise, and groundbreaking innovation.
              Our team is committed to building durable, efficient, and
              high-standard structures, ensuring excellence in every project we
              undertake. */}
              Delivering top-quality construction solutions with unmatched
              precision, exceptional expertise, and groundbreaking innovation.
            </h4>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div
            className="flex justify-end w-full h-full bg-pink-300"
            style={{
              clipPath:
                "polygon(0% 0%, 90% 0%, 90% 50%, 100% 50%, 90% 50%, 90% 100%, 0% 100%, 10% 50%)",
            }}
          >
            {/* <div
              className="border-l-[4px]s border-b-[4px]s border-yellow-500 bg-green-500  w-full h-full"
              style={{
                clipPath:
                  "polygon(0% 0%, 90% 0%, 90% 50%, 100% 50%, 90% 50%, 90% 100%, 0% 100%, 10% 50%)",
                // backgroundImage: `url(${backgroundImages[4]})`,
                // backgroundSize: "cover",
                // backgroundRepeat: "no-repeat",
                // backgroundPosition: "center",
                // width: "60vw",
                // height: "100vh",
              }}
            >
              <img
                src={backgroundImages[4]}
                className="object-fill bg-center w-full h-full"
              />
            </div> */}
            <img
              src={backgroundImages[4]}
              className="object-fill bg-center min-w-[60vw]s w-full h-full"
            />
          </div>
        </div>
      </header>
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
