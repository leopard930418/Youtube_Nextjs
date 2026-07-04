'use client';
import { useState } from "react";
import TutorialLibrary from "./TutorialLibrary";
import { graphicDesignTutorials, editingTutorials, motionDesignTutorials } from "./tutorialData";

export default function TutorialsLegacyContent() {
  const [activeTab, setActiveTab] = useState("NULL")
  const cards = [
    {
      id: 'graphic',
      title: 'Graphic Design',
      description: 'Learn everything you need to know about graphic design for YouTube on mobile and desktop.',
      tabLabel: 'Graphic Design',
      cardClass: 'shadow-[0_0_36px_rgba(0,212,255,0.18)]',
      tabClass: 'border-[rgba(177,241,255,0.58)] shadow-[inset_0_1px_0_rgba(255,255,255,0.16),inset_0_0_34px_rgba(255,255,255,0.03),0_10px_24px_rgba(0,0,0,0.36),0_0_18px_rgba(0,212,255,0.56)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),inset_0_0_38px_rgba(255,255,255,0.045),0_14px_32px_rgba(0,0,0,0.44),0_0_26px_rgba(0,212,255,0.56)]',
      iconClass: 'text-[#00d4ff]',
      iconFilter: 'drop-shadow-[0_0_10px_rgba(0,212,255,0.56)]',
      arrowClass: 'border-[#00d4ff] text-[#00d4ff]',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3C7 3 3 6.4 3 10.8C3 15.9 7.3 20 12.6 20H15C16.4 20 17.5 18.9 17.5 17.6C17.5 16.4 16.8 15.6 15.8 15.3C14.8 15 14.4 14.1 15 13.2C15.7 12.1 17 11.4 18.5 11.4H19C20.3 11.4 21.2 10.3 20.9 9C20.4 5.8 17 3 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="7.3" cy="9.2" r="1" fill="currentColor" />
          <circle cx="10.4" cy="7.4" r="1" fill="currentColor" />
          <circle cx="13.7" cy="8.6" r="1" fill="currentColor" />
          <path d="M15.5 18L20.5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      libraryProps: {
        title: 'Graphic Design Tutorials',
        kicker: 'Graphic design paths',
        subtitle: 'Learn Canva, Photopea, and Photoshop on PC and mobile with hand-picked tutorials for every skill level.',
        softwareOptions: [
          { value: 'canva', label: 'Canva' },
          { value: 'photopea', label: 'Photopea' },
          { value: 'photoshop', label: 'Photoshop' },
        ],
        id: 'graphic-design-library',
        ariaLabel: 'Graphic design tutorials',
        tutorials: graphicDesignTutorials
      },
    },
    {
      id: 'editing',
      title: 'Editing Tutorials',
      description: 'Learn everything you need to know about editing YouTube videos on mobile and desktop.',
      tabLabel: 'Editing',
      cardClass: 'shadow-[0_0_36px_rgba(255,31,143,0.18)]',
      tabClass: 'border-[rgba(255,184,225,0.58)] shadow-[inset_0_1px_0_rgba(255,255,255,0.16),inset_0_0_34px_rgba(255,255,255,0.03),0_10px_24px_rgba(0,0,0,0.36),0_0_18px_rgba(255,31,143,0.56)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),inset_0_0_38px_rgba(255,255,255,0.045),0_14px_32px_rgba(0,0,0,0.44),0_0_26px_rgba(255,31,143,0.56)]',
      iconClass: 'text-[#ff1f8f]',
      iconFilter: 'drop-shadow-[0_0_10px_rgba(255,31,143,0.56)]',
      arrowClass: 'border-[#ff1f8f] text-[#ff1f8f]',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="10" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M10 13.5L15 16L10 18.5V13.5Z" fill="currentColor" />
          <path d="M3.5 7L19.5 3.5L20.5 7.5L4.5 11L3.5 7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      ),
      libraryProps: {
        title: 'Editing Tutorials',
        kicker: 'Editing paths',
        subtitle: 'Learn video editing on PC and mobile with hand-picked tutorials for every skill level.',
        softwareOptions: [
          { value: 'capcut', label: 'CapCut' },
          { value: 'premiere-pro', label: 'Premiere Pro' },
          { value: 'davinci-resolve', label: 'DaVinci Resolve' },
          { value: 'final-cut-pro', label: 'Final Cut Pro' },
        ],
        id: 'editing-library',
        ariaLabel: 'Editing tutorials',
        tutorials: editingTutorials
      },
    },
    {
      id: 'motion',
      title: 'Motion Design',
      description: 'Learn everything you need to know about motion design for YouTube on mobile and desktop.',
      tabLabel: 'Motion Design',
      cardClass: 'shadow-[0_0_36px_rgba(255,214,0,0.16)]',
      tabClass: 'border-[rgba(255,241,168,0.58)] shadow-[inset_0_1px_0_rgba(255,255,255,0.16),inset_0_0_34px_rgba(255,255,255,0.03),0_10px_24px_rgba(0,0,0,0.36),0_0_18px_rgba(255,214,0,0.5)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),inset_0_0_38px_rgba(255,255,255,0.045),0_14px_32px_rgba(0,0,0,0.44),0_0_26px_rgba(255,214,0,0.5)]',
      iconClass: 'text-[#ffd600]',
      iconFilter: 'drop-shadow-[0_0_10px_rgba(255,214,0,0.5)]',
      arrowClass: 'border-[#ffd600] text-[#ffd600]',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="9" y="5" width="10" height="10" rx="2" fill="currentColor" opacity="0.85" />
          <rect x="12" y="8" width="10" height="10" rx="2" fill="currentColor" opacity="0.22" />
          <path d="M13 8.5L17 11L13 13.5V8.5Z" fill="#06101f" opacity="0.85" />
          <path d="M2.5 9H6M3.5 12H6M4.5 15H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      libraryProps: {
        title: 'Motion Design Tutorials',
        kicker: 'Motion design paths',
        subtitle: 'Learn motion design on PC and mobile with hand-picked tutorials for every skill level.',
        softwareOptions: [
          { value: 'after-effects', label: 'After Effects' },
          { value: 'blender', label: 'Blender' },
          { value: 'cinema-4d', label: 'Cinema 4D' },
          { value: 'alight-motion', label: 'Alight Motion' },
        ],
        id: 'motion-library',
        ariaLabel: 'Motion design tutorials',
        tutorials: motionDesignTutorials
      },
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      {/* HERO SECTION */}
      <section className="tutorial-hero relative w-[min(calc(100%-32px),1120px)] min-h-[330px] mx-auto my-3 mb-11 px-6 py-10 rounded-none overflow-hidden flex items-center justify-center shadow-[0_20px_70px_rgba(0,0,0,0.35)] bg-[linear-gradient(90deg,rgba(10,10,20,0.35),rgba(255,31,143,0.2),rgba(0,212,255,0.12)),url('/background.webp')] bg-center bg-cover bg-no-repeat">
        <div className="tutorial-hero-overlay w-[min(880px,92%)] p-[clamp(34px,5vw,56px)_clamp(24px,6vw,72px)] rounded-[26px] border-[rgba(255,255,255,0.12)] shadow-[0_22px_70px_rgba(0,0,0,0.44),0_0_70px_rgba(79,140,255,0.12)] text-center" style={{ background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.045)), rgba(0, 0, 0, 0.68)' }}>
          <h1 className="tutorial-hero-title text-white text-[clamp(2.25rem,6vw,4rem)] font-black leading-[1.05] tracking-[-0.05em] mb-6 shadow-[0_3px_18px_rgba(0,0,0,0.65)]">
            Find the best Tutorials
          </h1>
          <p className="tutorial-hero-subtitle text-[#aeb0bc] text-[clamp(1.05rem,2.5vw,1.55rem)] italic font-semibold leading-[1.7] m-0 max-w-[760px]">
            Watch the best tutorials out there to learn how to do
            certain tasks that will help you with creating content.
          </p>
        </div>
      </section>


      {/* TUTORIALS CARDS */}
      <section className="tutorial-showcase w-[min(calc(100%-80px),1120px)] mx-auto mb-[70px] px-[38px] py-[38px] pb-[26px] border border-[rgba(255,255,255,0.08)] rounded-[24px] bg-gradient-to-b from-[rgba(21,21,31,0.92)] to-[rgba(11,12,24,0.98)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_20px_60px_rgba(0,0,0,0.35)] overflow-hidden transition-all duration-[350ms] ease-in-out origin-top max-h-[520px] opacity-100" aria-label="Tutorial overview">
        <div className="tutorial-showcase-header flex flex-col items-center text-center mb-[22px]">
          <p className="tutorial-showcase-text block w-[min(100%,760px)] mx-auto text-[#d7d8e0] text-[1.08rem] font-medium leading-[1.75] text-center">
            Explore hand-picked tutorials across graphic design, motion design, and video editing to improve your skills, create better content, and build a more efficient workflow.
          </p>
        </div>

        <div className="tutorial-showcase-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
          {cards.map((card) => (
            <article
              key={card.id}
              className={`tutorial-showcase-card relative min-h-[218px] px-5 py-5 pb-[14px] border border-[rgba(255,255,255,0.08)] rounded-[18px] bg-gradient-to-b from-[rgba(21,23,35,0.96)] to-[rgba(12,14,26,0.98)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_18px_42px_rgba(0,0,0,0.28)] flex flex-col overflow-hidden ${card.cardClass}`}
            >
              <h3 className="text-white text-[1.08rem] font-extrabold text-center mb-2.5">
                {card.title}
              </h3>
              <p className="text-[#aeb0bc] text-[0.96rem] leading-[1.7] text-center m-0">
                {card.description}
              </p>
              <button
                type="button"
                onClick={() => setActiveTab(card.id)}
                className={`tutorial-tab mt-auto relative grid grid-cols-[20px_1fr_30px] items-center gap-2.5 h-[52px] min-h-[52px] px-3 border-2 rounded-none transition-all duration-[200ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-[rgba(255,255,255,0.78)] hover:saturate-[1.08] hover:brightness-[1.08] bg-[radial-gradient(circle_at_28%_18%,rgba(0,212,255,0.22)_0%,transparent_38%),radial-gradient(circle_at_78%_96%,rgba(0,212,255,0.08)_0%,transparent_36%),linear-gradient(180deg,rgba(18,23,37,0.96)_0%,rgba(8,10,22,0.98)_100%)] ${card.tabClass}`}
                aria-selected={activeTab === card.id}
                aria-expanded={activeTab === card.id}
              >
                <span className={`tutorial-tab-icon relative z-[1] w-5 h-5 flex-shrink-0 ${card.iconClass}`} style={{ filter: card.iconFilter }}>
                  {card.icon}
                </span>
                <span className="tutorial-tab-label relative z-[1] text-white font-extrabold text-[0.95rem] tracking-tight" style={{ textShadow: '0 2px 0 rgba(0,0,0,0.28), 0 8px 18px rgba(0,0,0,0.7)' }}>
                  {card.tabLabel}
                </span>
                <span className={`tutorial-tab-arrow relative z-[1] inline-flex items-center justify-center w-[28px] h-[28px] border-2 rounded-full transition-all duration-[200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${card.arrowClass}`}>
                  →
                </span>
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* CARD DETAILS SECTION */}
      {activeTab !== "NULL" && (
        <TutorialLibrary key={activeTab} {...cards.find(card => card.id === activeTab)?.libraryProps} />
      )}
    </div>
  );
}
