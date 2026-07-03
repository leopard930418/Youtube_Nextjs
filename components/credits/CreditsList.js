import { CREDIT_GROUPS } from "@/lib/credits-data";

const ICONS = {
  twitter: "/twitter-icon.svg",
  discord: "/discord-icon.svg",
};

function ContributorItem({ person }) {
  return (
    <li className="flex items-center gap-3">
      <span className="flex items-center gap-1 text-gray-500">
        <span>[</span>
        <img
          src={ICONS[person.platform]}
          alt=""
          width={16}
          height={16}
          aria-hidden
        />
        <span>]</span>
      </span>
      <a
        href={person.href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-white transition hover:text-accent"
      >
        {person.name}
      </a>
    </li>
  );
}

function CreditGroup({ group, showDivider }) {
  return (
    <div>
      {showDivider && (
        <div className="mb-8 h-px bg-white/10" aria-hidden="true" />
      )}
      <section>
        <h2 className="mb-4 text-xl font-bold text-accent">{group.title}</h2>
        <ul className="space-y-3">
          {group.contributors.map((person) => (
            <ContributorItem key={person.href} person={person} />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default function CreditsList() {
  return (
    <div className="space-y-8">
      {CREDIT_GROUPS.map((group, index) => (
        <CreditGroup
          key={group.title}
          group={group}
          showDivider={index > 0}
        />
      ))}
    </div>
  );
}
