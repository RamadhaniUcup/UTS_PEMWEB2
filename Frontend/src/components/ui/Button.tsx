interface ButtonProps {
  label: string;
  type?: "button" | "submit";
  variant?: "primary" | "outline";
  isLoading?: boolean;
  className?: string;
}
  
export const Button: React.FC<ButtonProps> = ({
  label,
  type = "button",
  variant = "primary",
  isLoading = false
  
}) => {
  const base =
    "px-6 py-2 rounded-md font-semibold transition-all duration-200 disabled:opacity-50";

  const styles = {
    primary:
      "bg-[#8B1E1E] text-white hover:bg-[#6f1818]",
    outline:
      "border border-[#8B1E1E] text-[#8B1E1E] hover:bg-[#8B1E1E] hover:text-white"
  };

  return (
    <button
      type={type}
      disabled={isLoading}
      className={`${base} ${styles[variant]}`}
    >
      {isLoading ? "Loading..." : label}
    </button>
  );
};

export default Button;