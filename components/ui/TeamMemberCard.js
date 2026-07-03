import Image from "next/image";

export default function TeamMemberCard({ member, showQuote = false }) {
  return (
    <article className="flex flex-col items-center rounded-2xl p-6 text-center transition hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(255,214,0,0.12)]">
      <Image
        src={member.image}
        alt={`${member.name} Profile Picture`}
        width={120}
        height={120}
        className="rounded-2xl border-2 border-[#ffd600] object-cover"
      />
      <h2 className="mt-5 text-2xl font-bold">{member.name}</h2>
      <p className="mt-2 text-gray-400 underline">{member.role}</p>
      {showQuote && member.quote && (
        <p className="mt-4 text-gray-200">
          <span className="text-gray-500">&ldquo;</span>
          {member.quote}
          <span className="text-gray-500">&rdquo;</span>
        </p>
      )}
    </article>
  );
}
