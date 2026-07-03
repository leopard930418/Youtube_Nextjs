export default function SectionContainer({
  children,
  className = "",
  size = "default",
}) {
  const sizeClasses = {
    narrow: "max-w-3xl",
    default: "max-w-4xl",
    wide: "max-w-6xl",
    full: "max-w-full",
  };

  return (
    <section
      className={`mx-auto px-6 py-12 md:py-16 ${sizeClasses[size]} ${className}`}
    >
      {children}
    </section>
  );
}
