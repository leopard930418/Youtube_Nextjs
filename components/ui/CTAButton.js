import Link from "next/link";

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "default",
  className = "",
}) {
  const baseStyles =
    "inline-block rounded-full font-semibold text-white transition";

  const variants = {
    primary:
      "bg-accent shadow-[0_5px_20px_rgba(224,20,161,0.3)] hover:bg-accent-hover hover:shadow-[0_10px_28px_rgba(255,31,143,0.55)]",
    secondary:
      "bg-white/10 hover:bg-white/20 hover:text-white text-gray-200",
    outline:
      "border border-white/30 hover:border-white/50 hover:bg-white/5",
  };

  const sizes = {
    small: "px-5 py-2 text-sm",
    default: "px-8 py-3",
    large: "px-10 py-4 text-lg",
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
}
