import React from "react";

export const TriangularLikeIcon: React.FC = () => {
  return (
    <div className="w-12 flex flex-col items-center justify-center">
      <div
        className="w-0 h-0 border-l-8 border-r-8 border-b-[8px]
         border-transparent border-b-yellow-600"
      />
      <div className="w-full h-1  border-transparent bg-yellow-600" />
    </div>
  );
};
