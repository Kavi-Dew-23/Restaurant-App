import React from "react";

const button = ({ text, onclick }) => {
  return (
    <div>
      <button
        onClick={onclick}
        className="bg-[#DA9D28] text-[#2D2605] font-bold rounded-full px-20 py-4 text-lg"
      >
        {text}
      </button>
    </div>
  );
};
export default button;
