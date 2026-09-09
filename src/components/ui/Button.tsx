import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "white";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary-700 text-white hover:bg-primary-800 shadow-sm shadow-primary-700/20",
  secondary:
    "bg-secondary-500 text-white hover:bg-secondary-600 shadow-sm shadow-secondary-500/25",
  outline:
    "border border-neutral-300 text-primary-800 hover:border-primary-700 hover:bg-primary-50",
  ghost: "text-primary-800 hover:bg-primary-50",
  white: "bg-white text-primary-800 hover:bg-primary-50 shadow-sm",
};

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonAsLink = BaseProps &
  ComponentPropsWithoutRef<typeof Link> & { href: string };

type ButtonAsButton = BaseProps &
  ComponentPropsWithoutRef<"button"> & { href?: undefined };

type ButtonProps = ButtonAsLink | ButtonAsButton;

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (props.href !== undefined) {
    const { href, ...rest } = props as ButtonAsLink;
    return <Link href={href} className={classes} {...rest} />;
  }

  const { type = "button", ...rest } = props as ButtonAsButton;
  return <button type={type} className={classes} {...rest} />;
}
