import { FaArrowRight } from "react-icons/fa";
import React from "react";

interface SeeMoreButtonProps {
  text?: string;
}

export const SeeMoreButton: React.FC<SeeMoreButtonProps> = ({
  text = "see more",
}) => {
  return (
    <button
      className="group text-black text-lg font-medium flex items-center gap-2 transition-all duration-300 hover:underline"
    >
      {text}
      <span className="group relative inline-flex items-center">
        <span className="transition-all duration-300 opacity-0 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-1">
          <FaArrowRight />
        </span>
      </span>
    </button>
  );
};
