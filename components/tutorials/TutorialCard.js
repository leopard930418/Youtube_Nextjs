'use client';

import Image from 'next/image';

export default function TutorialCard({
    title,
    description,
    thumbnail,
    level,
    duration,
    software,
    device,
    note,
    link,
}) {
    const cardContent = (
        <article
            className="
                        group relative overflow-hidden
                        rounded-[20px]
                        border border-white/10
                        bg-[#0b0d16]
                        shadow-[0_25px_70px_rgba(0,0,0,0.55)]
                        transition-all duration-300
                        hover:shadow-[0_35px_80px_rgba(0,0,0,0.65)]
                        hover:border-white/20
                        cursor-pointer
                        outline-none
                    "
        >

            {/* ================= THUMBNAIL ================= */}
            <div className="relative aspect-video overflow-hidden">

                {thumbnail ? (
                    <Image
                        src={thumbnail}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#1a1d2e] to-[#0f111a] flex items-center justify-center">
                        <span className="text-white/20 text-6xl">▶</span>
                    </div>
                )}

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

                {/* PLAY BUTTON - Visible on hover */}
                <div className="absolute left-1/2 top-1/2 w-[54px] h-[54px] rounded-[999px] bg-[rgba(5,8,18,0.72)] text-white inline-flex items-center justify-center text-[1.2rem] font-[950] opacity-0 shadow-[0_0_24px_rgba(0,212,255,0.22)] transition-all duration-200 ease group-hover:opacity-100"
                    style={{ transform: 'translate(-50%, -50%) scale(0.92)' }}
                >
                    ▶
                </div>

                {/* DURATION BADGE */}
                {duration && (
                    <div className="absolute bottom-3 right-3 px-2 py-1 text-xs font-bold text-white bg-black/80 backdrop-blur-md rounded-md border border-white/10">
                        {duration}
                    </div>
                )}
            </div>

            {/* ================= CONTENT ================= */}
            <div className="p-5 bg-[#0f111a]">

                {/* DESCRIPTION */}
                {description && (
                    <p className="text-white/80 text-[0.95rem] leading-[1.6] mb-4">
                        {description}
                    </p>
                )}

                {/* NOTE */}
                {note && (
                    <p className="text-[#ff2f9b] text-[0.85rem] font-semibold mb-4 italic">
                        {note}
                    </p>
                )}

                {/* BIG TITLE ON IMAGE (like screenshot) */}
                <div className="flex items-center justify-left text-center py-3">
                    <p className="text-[16px] font-extrabold text-white leading-tight drop-shadow-[0_6px_20px_rgba(0,0,0,0.8)]">
                        {title}
                    </p>
                </div>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-4">
                    <p className="text-white/60 text-[0.85rem] font-semibold">Tags:</p>
                    {software && (
                        <span className="inline-flex flex-shrink-0 items-center justify-center min-h-[26px] px-[9px] py-[5px] border border-[rgba(155,123,255,0.42)] rounded-[8px] text-[#9b7bff] text-[0.72rem] font-[900] leading-none whitespace-nowrap shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_14px_rgba(155,123,255,0.2)]"
                            style={{
                                background: 'radial-gradient(circle at 24% 16%, rgba(155, 123, 255, 0.16), transparent 46%), linear-gradient(180deg, rgba(18, 23, 37, 0.96) 0%, rgba(8, 10, 22, 0.98) 100%)'
                            }}
                        >
                            {software}
                        </span>
                    )}
                    {device && (
                        <span className="inline-flex flex-shrink-0 items-center justify-center min-h-[26px] px-[9px] py-[5px] border rounded-[8px] text-[0.72rem] font-[900] leading-none whitespace-nowrap shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_14px_rgba(70,255,143,0.24)]"
                            style={{
                                color: device === 'Mobile' ? '#46ff8f' : '#ffd166',
                                borderColor: device === 'Mobile' ? 'rgba(70, 255, 143, 0.45)' : 'rgba(255, 209, 102, 0.45)',
                                background: device === 'Mobile' 
                                    ? 'radial-gradient(circle at 24% 16%, rgba(70, 255, 143, 0.18), transparent 46%), linear-gradient(180deg, rgba(18, 23, 37, 0.96) 0%, rgba(8, 10, 22, 0.98) 100%)'
                                    : 'radial-gradient(circle at 24% 16%, rgba(255, 209, 102, 0.18), transparent 46%), linear-gradient(180deg, rgba(18, 23, 37, 0.96) 0%, rgba(8, 10, 22, 0.98) 100%)',
                                boxShadow: device === 'Mobile'
                                    ? 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 14px rgba(70, 255, 143, 0.24)'
                                    : 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 14px rgba(255, 209, 102, 0.24)'
                            }}
                        >
                            {device}
                        </span>
                    )}
                    {level && (
                        <span className="inline-flex flex-shrink-0 items-center justify-center min-h-[26px] px-[9px] py-[5px] border rounded-[8px] text-[0.72rem] font-[900] leading-none whitespace-nowrap shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_14px_rgba(163,230,53,0.2)]"
                            style={{
                                color: (() => {
                                    const levelLower = level.toLowerCase();
                                    if (levelLower.includes('intermediate')) return '#f4a261';
                                    if (levelLower.includes('advanced')) return '#ff4d6d';
                                    if (levelLower.includes('complete')) return '#5b8cff';
                                    if (levelLower.includes('playlist')) return '#d6a2ff';
                                    return '#a3e635';
                                })(),
                                borderColor: (() => {
                                    const levelLower = level.toLowerCase();
                                    if (levelLower.includes('intermediate')) return 'rgba(244, 162, 97, 0.45)';
                                    if (levelLower.includes('advanced')) return 'rgba(255, 77, 109, 0.45)';
                                    if (levelLower.includes('complete')) return 'rgba(91, 140, 255, 0.45)';
                                    if (levelLower.includes('playlist')) return 'rgba(214, 162, 255, 0.45)';
                                    return 'rgba(163, 230, 53, 0.42)';
                                })(),
                                background: (() => {
                                    const levelLower = level.toLowerCase();
                                    if (levelLower.includes('intermediate')) return 'radial-gradient(circle at 24% 16%, rgba(244, 162, 97, 0.18), transparent 46%), linear-gradient(180deg, rgba(18, 23, 37, 0.96) 0%, rgba(8, 10, 22, 0.98) 100%)';
                                    if (levelLower.includes('advanced')) return 'radial-gradient(circle at 24% 16%, rgba(255, 77, 109, 0.18), transparent 46%), linear-gradient(180deg, rgba(18, 23, 37, 0.96) 0%, rgba(8, 10, 22, 0.98) 100%)';
                                    if (levelLower.includes('complete')) return 'radial-gradient(circle at 24% 16%, rgba(91, 140, 255, 0.18), transparent 46%), linear-gradient(180deg, rgba(18, 23, 37, 0.96) 0%, rgba(8, 10, 22, 0.98) 100%)';
                                    if (levelLower.includes('playlist')) return 'radial-gradient(circle at 24% 16%, rgba(214, 162, 255, 0.18), transparent 46%), linear-gradient(180deg, rgba(18, 23, 37, 0.96) 0%, rgba(8, 10, 22, 0.98) 100%)';
                                    return 'radial-gradient(circle at 24% 16%, rgba(163, 230, 53, 0.16), transparent 46%), linear-gradient(180deg, rgba(18, 23, 37, 0.96) 0%, rgba(8, 10, 22, 0.98) 100%)';
                                })(),
                                boxShadow: (() => {
                                    const levelLower = level.toLowerCase();
                                    if (levelLower.includes('intermediate')) return 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 14px rgba(244, 162, 97, 0.22)';
                                    if (levelLower.includes('advanced')) return 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 14px rgba(255, 77, 109, 0.22)';
                                    if (levelLower.includes('complete')) return 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 14px rgba(91, 140, 255, 0.22)';
                                    if (levelLower.includes('playlist')) return 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 14px rgba(214, 162, 255, 0.22)';
                                    return 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 14px rgba(163, 230, 53, 0.2)';
                                })()
                            }}
                        >
                            {level}
                        </span>
                    )}
                </div>
            </div>
        </article>
    );

    return link ? (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block outline-none"
        >
            {cardContent}
        </a>
    ) : cardContent;
}