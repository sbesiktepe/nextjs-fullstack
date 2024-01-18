import className from "classnames";
import { ButtonHTMLAttributes } from "react";
import { GoSync } from "react-icons/go";

type ButtonProps = {
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  children: React.ReactNode;
  loading?: boolean;
  rounded?: boolean;
  outline?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  loading,
  disabled,
  ...rest
}) => {
  const validateButtonStyle = () => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      throw new Error(
        "Only one of primary, secondary, success, warning, danger can be true"
      );
    }
  };

  validateButtonStyle(); // Call the validation function
  const classes = className(
    rest.className,
    "flex items-center justify-center ",
    {
      "opacity-80": loading,
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-900 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-400 bg-yellow-400 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-400": outline && warning,
      "text-red-500": outline && danger,
    }
  );

  return (
    <button {...rest} disabled={loading || disabled} className={classes}>
      {loading ? <GoSync className="animate-spin" /> : children}
    </button>
  );
};

export default Button;
