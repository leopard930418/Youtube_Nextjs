import Link from "next/link";

export default function ResourceCards({ items }) {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 px-6 py-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group flex h-72 flex-col items-center justify-center gap-4 rounded-3xl border-2 border-white/70 bg-white/[0.04] p-6 text-center shadow-[0_4px_24px_rgba(0,0,0,0.3)] transition hover:-translate-y-1.5 hover:border-white/50 hover:bg-white/[0.07] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
        >
          <span className="text-6xl transition group-hover:scale-110">
            {item.emoji}
          </span>
          <span className="text-lg font-semibold text-white">{item.label}</span>
        </Link>
      ))}
    </div>
  );
}
