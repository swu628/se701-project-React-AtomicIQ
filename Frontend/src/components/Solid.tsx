import React from 'react';

function Solid({ className, svgClassName, textClassName, tooltipText,detail }) {
  return (
    <div className={`relative ${className} group`}>
      <svg
        className={`absolute inset-0 w-full h-full transform transition-transform duration-300 ease-in-out group-hover:scale-110 ${svgClassName}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
        />
      </svg>
      <div className={`relative z-10 flex items-center justify-center h-full ${textClassName}`}>
        {detail}
      </div>
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-max bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
       {tooltipText}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-2 h-2 bg-gray-700 rotate-45"></div>
      </div>
    </div>
  );
}

export default Solid;
