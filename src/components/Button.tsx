import React from "react";

type ButtonProps = {
  size?: "sm" | "md";
  loading?: boolean;
  variant?: "primary" | "secondary" | "pure" | "teritiary";
  children?: React.ReactNode;
  disabled?: boolean;
  state?: ButtonState;
};
type ButtonState = "normal" | "hover" | "disable";

const ButtonVariants = {
  variant: {
    primary: "bg-bg text-text-h ",
    secondary: "bg-code-bg text-h",
    pure: "bg-accent-bg text-h",
    teritiary: "bg-social-bg text-h",
  },
  size: {
    sm: "w-fit rounded-[6px] py-2 px-3 items-center text-sm",
    md: "w-fit px-4 py-2 rounded-[6px] items-center text-base",
  },
};

const ButtonStates = {
  normal: "bg-bg text-h ",
  hover: "bg-social-bg text-text-h",
  disable: "bg-accent-bg text-text ",
};

function Button({
  size = "md",
  loading = false,
  variant = "primary",
  disabled = false,
  state = "normal",
  children,
}: ButtonProps) {
  const baseStyles = "inline-flex justify-center gap-2 rounded-[6px] text-base font-sans";
  const variantStyles = ButtonVariants.variant[variant];
  const sizeStyles = ButtonVariants.size[size];
  const stateStyles = ButtonStates[state];
  return (
    <button
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${stateStyles}`}
    disabled={disabled}>
      {loading ? (
        <span>Loading...</span>
      ) : (
          children && <span>{children}</span>
      )}
    </button>
  );
}

export default Button;
