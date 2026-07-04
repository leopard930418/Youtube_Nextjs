'use client';

import { useState } from 'react';
import TutorialCard from './TutorialCard';

export default function TutorialLibrary({
    title,
    kicker,
    subtitle,
    softwareOptions,
    id,
    ariaLabel,
    tutorials = []
}) {
    const [softwareFilter, setSoftwareFilter] = useState('all');
    const [deviceFilter, setDeviceFilter] = useState('all');
    const [levelFilter, setLevelFilter] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    // Reset to page 1 when filters change
    const handleFilterChange = (setter) => (value) => {
        setter(value);
        setCurrentPage(1);
    };

    // Filter tutorials based on selected filters
    const filteredTutorials = tutorials.filter((tutorial) => {
        const matchesSoftware = softwareFilter === 'all' || tutorial.software === softwareFilter;
        const matchesDevice = deviceFilter === 'all' || 
            (deviceFilter === 'mobile' && tutorial.device === 'Mobile') ||
            (deviceFilter === 'desktop' && tutorial.device === 'PC');
        const matchesLevel = levelFilter === 'all' || 
            (levelFilter === 'beginner' && tutorial.level.toLowerCase().includes('beginner')) ||
            (levelFilter === 'intermediate' && tutorial.level.toLowerCase().includes('intermediate')) ||
            (levelFilter === 'expert' && tutorial.level.toLowerCase().includes('advanced'));
        return matchesSoftware && matchesDevice && matchesLevel;
    });

    // Calculate pagination
    const totalPages = Math.ceil(filteredTutorials.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentTutorials = filteredTutorials.slice(startIndex, endIndex);

    const selectClass =  `
                            w-full h-[52px]
                            px-[16px]
                            rounded-[14px]
                            bg-[rgba(10,12,22,0.92)]
                            border border-white/10
                            text-white text-[0.95rem] font-semibold
                            shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_25px_rgba(0,0,0,0.35)]
                            transition-all duration-200 ease-out
                            hover:border-white/20
                            focus:outline-none
                            focus:border-[#ff2f9b]
                            focus:shadow-[0_0_0_4px_rgba(255,47,155,0.10),inset_0_1px_0_rgba(255,255,255,0.06),0_14px_30px_rgba(0,0,0,0.5)]
                        `;

    return (
        <section
            className="editing-library w-[min(calc(100%-32px),1480px)] mx-[-32px_auto_110px] px-[28px] pt-[58px] px-[28px] pb-[30px] scroll-mt-[132px] border border-[rgba(255,255,255,0.08)] rounded-[26px] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_22px_70px_rgba(0,0,0,0.42)]"
            style={{
                background: 'radial-gradient(circle at 18% 0%, rgba(255, 31, 143, 0.12), transparent 34%), radial-gradient(circle at 88% 8%, rgba(0, 212, 255, 0.08), transparent 34%), linear-gradient(180deg, rgba(14, 17, 29, 0.98) 0%, rgba(8, 10, 20, 0.98) 100%)'
            }}
            id={id}
            aria-label={ariaLabel}
        >
            <div className="editing-library-header flex flex-col items-center mb-6 text-center">
                <div>
                    <div className="editing-library-kicker text-[#ff1f8f] text-[0.78rem] font-extrabold tracking-[0.16em] text-center uppercase">
                        {kicker}
                    </div>
                    <h2 className="editing-library-title m-0 text-white text-[32px] font-extrabold tracking-[-0.05em] text-shadow-[0_12px_34px_rgba(0,0,0,0.7)]">
                        {title}
                    </h2>
                    <p className="editing-library-subtitle max-w-[680px] mx-[12px_auto_0] text-[#b9bfcc] text-[clamp(0.92rem,1.8vw,1.05rem)] leading-[1.65] text-center">
                        {subtitle}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[14px] mb-10">

                {/* SOFTWARE */}
                <div>
                    <label className="block mb-2 text-[0.75rem] font-extrabold tracking-[0.12em] text-white/80 uppercase">
                        Software
                    </label>
                    <select
                        value={softwareFilter}
                        onChange={(e) => handleFilterChange(setSoftwareFilter)(e.target.value)}
                        className={selectClass}
                    >
                        <option value="all">All Software</option>
                        {softwareOptions?.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* DEVICE */}
                <div>
                    <label className="block mb-2 text-[0.75rem] font-extrabold tracking-[0.12em] text-white/80 uppercase">
                        Device
                    </label>
                    <select
                        value={deviceFilter}
                        onChange={(e) => handleFilterChange(setDeviceFilter)(e.target.value)}
                        className={selectClass}
                    >
                        <option value="all">All Devices</option>
                        <option value="mobile">Mobile</option>
                        <option value="desktop">PC</option>
                    </select>
                </div>

                {/* LEVEL */}
                <div>
                    <label className="block mb-2 text-[0.75rem] font-extrabold tracking-[0.12em] text-white/80 uppercase">
                        Level
                    </label>
                    <select
                        value={levelFilter}
                        onChange={(e) => handleFilterChange(setLevelFilter)(e.target.value)}
                        className={selectClass}
                    >
                        <option value="all">All Levels</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="expert">Advanced</option>
                        <option value="complete-video">Complete Video</option>
                        <option value="playlist">Playlist</option>
                    </select>
                </div>
            </div>
            <p
                className="editing-results-status text-[#d7dbea] text-[0.92rem] font-extrabold text-center mt-4 mb-5"
                id="graphic-results-status"
                aria-live="polite"
            >
                Showing <strong className="text-[#ff2f9d] font-black">{startIndex + 1}-{Math.min(endIndex, filteredTutorials.length)}</strong> of <strong className="text-[#ff2f9d] font-black">{filteredTutorials.length}</strong> results
            </p>

            {/* TUTORIAL CARDS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
                {currentTutorials.map((tutorial, index) => (
                    <TutorialCard
                        key={`${tutorial.videoId || tutorial.link}-${index}`}
                        title={tutorial.title}
                        link={tutorial.link}
                        thumbnail={tutorial.thumbnail}
                        duration={tutorial.duration}
                        software={tutorial.software}
                        level={tutorial.level}
                        device={tutorial.device}
                        note={tutorial.note}
                    />
                ))}
            </div>

            {/* PAGINATION CONTROLS */}
            {totalPages > 1 && (
                <div className="flex items-center justify-center gap-3 mt-8">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="min-w-[42px] h-[42px] px-[13px] border border-white/10 rounded-[10px] bg-[rgba(8,12,24,0.8)] text-[#d7dbea] inline-flex items-center justify-center text-[0.95rem] font-black leading-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5 hover:border-[rgba(255,31,143,0.45)] hover:bg-[rgba(255,31,143,0.12)]"
                    >
                        Previous
                    </button>
                    <div className="flex items-center gap-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`min-w-[42px] h-[42px] px-[13px] rounded-[10px] inline-flex items-center justify-center text-[0.95rem] font-black leading-none transition-all duration-200 ${currentPage === page
                                    ? 'text-white'
                                    : 'text-[#d7dbea] border border-white/10 bg-[rgba(8,12,24,0.8)] hover:-translate-y-0.5 hover:border-[rgba(255,31,143,0.45)] hover:bg-[rgba(255,31,143,0.12)]'
                                    }`}
                                style={currentPage === page ? {
                                    border: '1px solid rgba(155, 123, 255, 0.65)',
                                    backgroundColor: 'rgba(155, 123, 255, 0.16)',
                                    color: '#ffffff'
                                } : {}}
                            >
                                {page}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="min-w-[42px] h-[42px] px-[13px] border border-white/10 rounded-[10px] bg-[rgba(8,12,24,0.8)] text-[#d7dbea] inline-flex items-center justify-center text-[0.95rem] font-black leading-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5 hover:border-[rgba(255,31,143,0.45)] hover:bg-[rgba(255,31,143,0.12)]"
                    >
                        Next
                    </button>
                </div>
            )}
        </section>
    );
}
