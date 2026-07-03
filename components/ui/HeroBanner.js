import Link from "next/link";

export default function HeroBanner({
  title,
  subtitle,
  backgroundImage = "/background.webp",
  cta,
}) {
  return (
    <section
      className="relative flex min-h-[260px] items-center justify-center bg-cover bg-center px-4 py-16 md:min-h-[320px]"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 max-w-2xl rounded-2xl bg-gradient-to-b from-[#2d232e] to-[#18151f] px-8 py-8 text-center shadow-2xl md:px-12 md:py-10">
        <h1 className="text-3xl font-extrabold md:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-base text-gray-200 md:text-xl">{subtitle}</p>
        )}
        {cta && (
          <Link
            href={cta.href}
            className="mt-6 inline-block rounded-full bg-accent px-8 py-3 font-semibold text-white shadow-[0_5px_20px_rgba(224,20,161,0.3)] transition hover:bg-accent-hover hover:shadow-[0_10px_28px_rgba(255,31,143,0.55)]"
          >
            {cta.label}
          </Link>
        )}
      </div>
    </section>
  );
}
