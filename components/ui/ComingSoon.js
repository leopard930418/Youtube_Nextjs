import Image from "next/image";

export default function ComingSoon({
  title = "Coming Soon",
  description = "This section is under development.",
  image = "/comming.webp",
}) {
  return (
    <section className="relative overflow-hidden bg-[#0b0f2a] px-6 py-24 text-center">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(#4f6cff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative z-10 mx-auto max-w-xl">
        <h1 className="text-4xl font-bold text-[#7aa2ff]">{title}</h1>
        <p className="mt-4 text-gray-300">{description}</p>
        <p className="my-6 text-2xl tracking-[0.2em] text-gray-400">Soon...</p>
        <Image
          src={image}
          alt="Coming Soon"
          width={300}
          height={300}
          className="mx-auto"
        />
      </div>
    </section>
  );
}
