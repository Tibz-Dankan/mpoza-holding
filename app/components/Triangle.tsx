import React from "react";
import { twMerge } from "tailwind-merge";

interface TriangleProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Triangle: React.FC<TriangleProps> = (props) => {
  return (
    <div
      className={twMerge(
        `flex h-auto items-center justify-center bg-white`,
        props.className
      )}
    >
      <div
        className="relative w-0 h-0 border-b-[50px] border-b-transparent border-r-[50px]
        border-500 border-r-yellow-700"
      ></div>
    </div>
  );
};
