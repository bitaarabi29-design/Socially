
import type {ButtonProps} from "../../types/ButtonPropsType"


const ButtonVariants = {
  variant: {
    primary: "bg-base-200 text-base-content",
    secondary: "bg-neutral text-base-200 border border-base-300",
    pure: "bg-base-300 text-base-content",
    teritiary: "bg-base-300 text-base-content",
  },
  size: {
    sm: "rounded-[var(--radius-field)] py-2 px-3 items-center text-sm hover:bg-base-200/90 hover:text-base-content disabled:bg-base-200/50 disabled:text-base-content  ",
    md: "px-4 py-2 rounded-[var(--radius-field)] items-center text-base  hover:bg-base-200/90 hover:text-base-content disabled:bg-base-200/50 disabled:text-base-content ",
  },
};

function Button({
  size = "md",
  loading = false,
  variant = "primary",
  disabled = false,
  children,icon
}: ButtonProps) {
  const baseStyles =
    "flex flex-row inline-flex justify-center gap-2 rounded-[var(--radius-field)] text-base font-family";
  const variantStyles = ButtonVariants.variant[variant];
  const sizeStyles = ButtonVariants.size[size];
  return (
    <button
      className={`${baseStyles} ${variantStyles} ${sizeStyles}`}
      disabled={disabled}
    >
      {loading ? (<span>Loading...</span>)
       : (
        <> 
        {icon && <span>{icon}</span>}
        {children && <span>{children}</span>}
        </>
       
        )}
    </button>
  );
}

export default Button;
