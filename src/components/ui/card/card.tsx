import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        bg-white/5
        backdrop-blur-xl
        border border-white/10
        rounded-3xl
        shadow-2xl
        p-8
        ${className}
      `}
    >
      {children}
    </div>
  );
}