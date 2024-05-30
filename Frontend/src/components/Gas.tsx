
function Gas({ className, svgClassName, textClassName, tooltipText,detail }) {
  return (
    <div className={`relative  ${className} group`}>
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
          d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 100-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
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

export default Gas;
