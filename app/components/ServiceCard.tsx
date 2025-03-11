import React, { Fragment, ReactNode } from "react";

type ServiceCardProps = React.HTMLAttributes<HTMLDivElement> & {
  icon: ReactNode;
  title: string;
  content: string;
};

export const ServiceCard: React.FC<ServiceCardProps> = (props) => {
  return (
    <Fragment>
      <div className="bg-white rounded-md p-6 space-y-4 w-full h-auto shadow-md">
        <div className="grid place-items-center items-start">
          <span
            className="w-14 h-14 bg-yellow-600 rounded-[50%]
            grid place-items-center relative"
          >
            <span>{props.icon}</span>
          </span>
        </div>
        <p className="text-xl text-gray-800 text-center">{props.title}</p>
        <p className="text-sm text-gray-600 text-center">{props.content}</p>
      </div>
    </Fragment>
  );
};
