export default function LegalContent({ title, lastUpdated, children }) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      <h1 className="mb-8 text-center text-3xl font-bold text-white md:text-4xl">
        {title}
      </h1>
      {lastUpdated && (
        <p className="mb-6 text-center text-gray-400">
          <strong className="text-white">Last Updated:</strong> {lastUpdated}
        </p>
      )}
      <div className="max-w-none space-y-6 text-gray-200 [&_a]:text-sky-300 [&_a:hover]:underline [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-accent [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-white">
        {children}
      </div>
    </section>
  );
}
