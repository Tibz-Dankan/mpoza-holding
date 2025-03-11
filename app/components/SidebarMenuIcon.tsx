import React from "react";
import { FiMenu } from "react-icons/fi";

export const SidebarMenuIcon: React.FC = () => {
  const closeSideBarHandler = () => {
    document!.getElementById("sidebar")!.style.right = "0px";
  };

  return (
    <div className="w-auto">
      <FiMenu
        size={24}
        onClick={() => closeSideBarHandler()}
        className="cursor-pointer text-blue-700 hover:text-yellow-700"
      />
    </div>
  );
};
