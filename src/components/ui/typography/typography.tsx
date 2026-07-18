import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({
  className = "",
  ...props
}: InputProps) {
  return (
    <input
      className={`
        w-full
        px-4
        py-3
        rounded-xl
        bg-white/5
        border
        border-white/10
        text-white
        placeholder:text-slate-400
        outline-none
        focus:border-cyan-400
        transition-all
        ${className}
      `}
      {...props}
    />
  );
}