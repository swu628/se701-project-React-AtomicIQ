
function Liquid({ className, svgClassName, textClassName, tooltipText,detail }) {
  return (
    <div className={`relative ${className} group`}>
      <svg
        className={`absolute inset-0 w-full h-full ${svgClassName}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
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

export default Liquid;
