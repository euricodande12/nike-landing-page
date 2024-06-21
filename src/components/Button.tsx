import ButtonProps from "../interfaces/buttonProps.interface";

const Button: React.FC<ButtonProps> = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white border-coral-red"
      } rounded-full ${fullWidth && "w-full"}`}
    >
      {label}

      <img
        src={iconURL}
        className={`ml-2 rounded-full w-5 h-5 ${
          iconURL === "none" ? "hidden" : "block"
        }`}
        alt="Icon"
      />
    </button>
  );
};

export default Button;
