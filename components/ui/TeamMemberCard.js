import Image from "next/image";

export default function TeamMemberCard({ member, showQuote = true }) {
  return (
    <article
      className="
        group
        flex flex-col items-center text-center w-full md:w-4/7
        rounded-2xl py-6 px-4
        bg-[#10121CC7]
        border-[4px] 
        border-white/10
        transition-all duration-300
        hover:shadow-[0_12px_32px_rgba(0,0,0,6),0_0_24px_rgba(106,142,244,0.4)]
      "
    >
      <Image
        src={member.image}
        alt={`${member.name} Profile Picture`}
        width={120}
        height={120}
        className="
          w-[120px] h-[120px]
          rounded-2xl
          border-2 border-[#ffd600]
          object-cover
          mb-5
          shadow-[0_8px_18px_rgba(0,0,0,0.35)]
          transition-all duration-300
          group-hover:scale-105
          group-hover:rotate-[5deg]
        "
      />

      <h2 className="text-2xl font-bold text-white">
        {member.name}
      </h2>

      <p className="mt-2 text-gray-400 underline">
        {member.role}
      </p>

      {showQuote && member.quote && (
        <p className="mt-4 text-gray-200 text-[1rem] leading-[1.5]">
          <span className="text-gray-500">"</span>
          {member.quote}
          <span className="text-gray-500">"</span>
        </p>
      )}
    </article>
  );
}