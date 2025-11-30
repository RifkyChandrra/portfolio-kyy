import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({ variant = "primary", className = "", ...props }: Props) {
  const base = variant === "primary" ? "btn-primary" : "btn-secondary";
  return <button className={`${base} ${className}`} {...props} />;
}
