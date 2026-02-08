function Button({
  icon,
  alt,
  onClick,
  text,
  tooltip,
  disabled,
  tooltipPosition = "top",
  className = "",
}) {
  const positions = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-3",
    right: "left-full top-1/2 -translate-y-1/2 ml-3",
  };

  const arrows = {
    top: "top-full left-1/2 -translate-x-1/2 border-t-black",
    right:
      "left-full top-1/2 -translate-y-1/2 -translate-x-full border-r-black",
  };

  return (
    <button
      aria-label={alt}
      onClick={onClick}
      className={`relative group cursor-pointer flex items-center justify-center w-16 h-16 md:h-8
        rounded-lg
        transition md:hover:scale-110 active:scale-90 
        ${className} 
        hover:scale-110 transition-all`}
    >
      {tooltip && (
        <div
          className={`
            absolute ${positions[tooltipPosition]}
            whitespace-nowrap
            rounded bg-neutral-900 px-2 py-1 text-xs text-white
            opacity-0 group-hover:opacity-100
            transition-opacity duration-200
            pointer-events-none
            z-10
          `}
        >
          {/* <div
          className={`
      absolute ${positions[tooltipPosition]}
      whitespace-nowrap
      rounded bg-neutral-900 px-2 py-1 text-xs text-white
      opacity-0
      md:group-hover:opacity-100
      transition-opacity duration-200
      pointer-events-none
      z-10
      hidden md:block
    `}
        > */}
          {tooltip}
          <div
            className={`
              absolute w-0 h-0 border-4 border-transparent
              ${arrows[tooltipPosition]}
            `}
          />
        </div>
      )}

      <img
        src={icon}
        alt={alt}
        className="w-auto h-auto 
        md:w-16 md:h-16 
        cursor-pointer"
      />
      <p className="md:block sm:block">{text}</p>
    </button>
  );
}

export default Button;
