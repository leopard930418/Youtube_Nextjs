export default function PageHero({ title, subtitle, centered = true }) {
  return (
    <div className={`px-6 py-12 md:py-16 ${centered ? "text-center" : ""}`}>
      <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-gray-300">{subtitle}</p>
      )}
    </div>
  );
}
