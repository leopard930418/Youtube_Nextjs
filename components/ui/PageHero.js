export default function PageHero({ title, subtitle, centered = true }) {
  return (
    <div className={`px-6 py-12 md:py-16 ${centered ? "text-center" : ""}`}>
      <div
        className="text-white text-[3rem] font-extrabold text-center my-4 mb-2 tracking-[-0.02em] relative after:content-[''] after:block after:w-[80px] after:h-[3px] after:bg-[#ffd600] after:mx-auto after:mt-3 after:rounded-[2px] after:opacity-70"
        // className="text-4xl font-bold md:text-5xl"
        >{title}</div>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-gray-300">{subtitle}</p>
      )}
    </div>
  );
}
