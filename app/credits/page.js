import { PageLayout } from "@/components/layout";

const creditsData = [
  {
    title: 'Thumbnails',
    credits: [
      { name: 'Henvir_', platform: 'twitter', url: 'https://x.com/henvir_' },
      { name: 'Ohio24yt', platform: 'discord', url: 'https://discord.com/users/1345838489303777412' },
      { name: 'Monkyvr', platform: 'discord', url: 'https://discord.com/users/1286289671512657971' },
      { name: 'ToxicAlien123', platform: 'discord', url: 'https://discord.com/users/911407313947090985' },
      { name: 'foxkind1234', platform: 'discord', url: 'https://discord.com/users/738829492356907098' },
    ],
  },
  {
    title: 'Development & Design',
    credits: [
      { name: 'Liam', platform: 'discord', url: 'https://discord.com/users/1355326226239193148' },
      { name: 'Dishu', platform: 'discord', url: 'https://discord.com/users/866509443004891187' },
      { name: 'Seyu', platform: 'discord', url: 'https://discord.com/users/1304638744955191379' },
      { name: 'ProbTyty', platform: 'discord', url: 'https://discord.com/users/1340556921488281693' },
    ],
  },
  {
    title: 'Resources',
    credits: [
      { name: 'KSI313', platform: 'discord', url: 'https://discord.com/users/803644783015755798' },
    ],
  },
];

export default function Credits() {
  return (
    <PageLayout showFooter={false}>
      <section className="relative w-full py-16 text-white bg-[#070812]">

        {/* TITLE */}
        <div className="text-center">
          <h2 className="flex flex-col items-center gap-[12px] text-center m-[0_0_clamp(26px,4vw,5px)] text-[clamp(2.35rem,5vw,4.25rem)] font-black leading-[.98] tracking-[-0.055em] animate-none bg-clip-text text-transparent" style={{
            backgroundImage: 'linear-gradient(92deg, #fff 0%, #dce9ff 42%, #9ed8ff 78%, #fff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Credits
          </h2>

          {/* neon underline */}
          <div className="mx-auto mt-3 h-[3px] w-24 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 rounded-full" />
        </div>

        {/* MAIN CARD */}
        <div className="w-full flex justify-center py-10">
          <div className="relative w-[min(95vw,1100px)] rounded-4xl border border-white/10 backdrop-blur-xl overflow-hidden" style={{
            background: 'rgba(16, 18, 28, 0.78)',
            boxShadow: '0 18px 58px rgba(0, 0, 0, 0.34), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
          }}>

            {/* TOP ACCENT LINE */}
            <div className="bg-[linear-gradient(90deg,#ff1f8f,#ffd600,#00d4ff)] opacity-95 shadow-[0_0_20px_rgba(255,31,143,0.25)] absolute top-0 left-0 right-0 h-[3px] " />

            {/* INTRO BOX */}
            <div className="flex justify-center">
              <div className="w-[980px] bg-[linear-gradient(135deg,rgba(255,31,143,0.12),rgba(0,212,255,0.07))] m-6 rounded-xl border border-white/10 px-6 py-5 text-center text-gray-200 text-[clamp(0.96rem,1.1vw,1.04rem)] leading-[1.85]">
                Thank you to everyone who has contributed their work to the YouTube Growth Guide website!
                This whole project wouldn't be possible without the amazing work you've allowed us to put in.
                Your names will be listed down below!
              </div>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3">

              {creditsData.map((group, i) => (
                <div
                  key={group.title}
                  className={`px-12 py-6 ${i > 0
                    ? 'border-[3px] border-transparent md:border-r'
                    : ''
                  }`}
                  style={i > 0 ? {
                    borderImage: 'linear-gradient(180deg, transparent 0%, rgba(156,163,175,0.58) 10%, rgba(156,163,175,0.58) 90%, transparent 100%) 1',
                  } : {}}
                >

                  {/* SECTION TITLE */}
                  <div className="left-0 top-[0.2em] bottom-[0.2em]
                    w-[4px]
                    rounded-full
                    bg-gradient-to-b from-[#ff1f8f] to-[#00d4ff]
                    shadow-[0_0_18px_rgba(255,31,143,0.35)]
                    ">
                    <h3 className="ml-3 text-[#ff2f9b] flex text-[clamp(1.05rem,1.8vw,1.32rem)] font-extrabold mb-6 tracking-wide whitespace-nowrap">
                      {group.title}
                    </h3>
                  </div>

                  {/* LIST */}
                  <ul className="space-y-4">
                    {group.credits.map((credit) => (
                      <li key={credit.name} className="flex items-center gap-3">

                        {/* ICON WRAP */}
                        <div className="inline-flex items-center text-[#f0f3ff] text-[1.15rem] font-black [text-shadow:0_0_10px_rgba(255,255,255,0.25)]">
                          [
                          <img
                            src={
                              credit.platform === 'twitter'
                                ? '/twitter-icon.svg'
                                : '/discord-icon.svg'
                            }
                            className="w-[46px] h-[46px] mx-1"
                            alt=""
                          />
                          ]
                        </div>

                        {/* NAME */}
                        <a
                          href={credit.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                          inline-flex items-center text-[#f0f3ff] text-[1.15rem] font-black [text-shadow:0_0_10px_rgba(255,255,255,0.25)]
                          hover:text-pink-500 transition-colors whitespace-nowrap"
                        >
                          {credit.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout >
  );
}