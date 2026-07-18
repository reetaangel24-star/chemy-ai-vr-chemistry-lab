import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "px-6 py-3 rounded-xl font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-cyan-500 hover:bg-cyan-400 text-white shadow-lg shadow-cyan-500/30",

    secondary:
      "bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-500/30",

    outline:
      "border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}