import React from "react";
import { ContactUsForm } from "./ContactUsForm";
import { ContactUsInfo } from "./ContactUsInfo";
import { SocialsCard } from "./SocialsCard";
import { NewsLetter } from "./NewsLetter";

export const ContactContentLayout: React.FC = () => {
  return (
    <div
      className="w-full flex flex-col md:flex-col lg:flex-row gap-6
       px-4 sm:px-8 py-16"
    >
      <div
        className="flex-1 flex flex-col sm:flex-row bg-white px-6 
         gap-4 relative rounded-md shadow"
      >
        <ContactUsForm />
        <ContactUsInfo />
      </div>
      <div
        className="w-full lg:w-80 flex flex-col sm:flex-row 
         lg:flex-col gap-4"
      >
        <SocialsCard />
        <NewsLetter />
      </div>
    </div>
  );
};
