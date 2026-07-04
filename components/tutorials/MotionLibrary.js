'use client';

import { useState } from 'react';

export default function MotionLibrary() {
    const [softwareFilter, setSoftwareFilter] = useState('all');
    const [deviceFilter, setDeviceFilter] = useState('all');
    const [levelFilter, setLevelFilter] = useState('all');

    return (
        <section
            className="editing-library motion-library w-[min(calc(100%-32px),1480px)] mx-[-32px_auto_110px] px-[38px] py-[46px_38px_24px] bg-[linear-gradient(180deg,rgba(21,23,35,0.96)_0%,rgba(12,14,26,0.98)_100%)] rounded-[22px] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_22px_70px_rgba(0,0,0,0.42)]"
            id="motion-library"
            aria-label="Motion design tutorials"
        >
            <div className="editing-library-header flex flex-col items-center mb-6 text-center">
                <div>
                    <div className="editing-library-kicker text-[#ff1f8f] text-[0.78rem] font-extrabold tracking-[0.16em] text-center uppercase">
                        Motion design paths
                    </div>
                    <h2 className="editing-library-title m-0 text-white text-[clamp(2rem,4vw,3.25rem)] font-extrabold tracking-[-0.05em] text-shadow-[0_12px_34px_rgba(0,0,0,0.7)]">
                        Motion Design Tutorials
                    </h2>
                    <p className="editing-library-subtitle max-w-[680px] mx-[12px_auto_0] text-[#b9bfcc] text-[clamp(0.92rem,1.8vw,1.05rem)] leading-[1.65] text-center">
                        Learn motion design on PC and mobile
                        with hand-picked tutorials for every skill level.
                    </p>
                </div>
            </div>

            <div
                className="editing-filters"
                aria-label="Motion design tutorial filters"
            >
                <div className="editing-filter">
                    <label htmlFor="motion-software-filter">Software</label>
                    <select
                        id="motion-software-filter"
                        value={softwareFilter}
                        onChange={(e) => setSoftwareFilter(e.target.value)}
                    >
                        <option value="all">All Software</option>
                        <option value="after-effects">After Effects</option>
                        <option value="blender">Blender</option>
                        <option value="capcut">CapCut</option>
                        <option value="alight-motion">Alight Motion</option>
                    </select>
                </div>
                <div className="editing-filter">
                    <label htmlFor="motion-device-filter">Device</label>
                    <select
                        id="motion-device-filter"
                        value={deviceFilter}
                        onChange={(e) => setDeviceFilter(e.target.value)}
                    >
                        <option value="all">All Devices</option>
                        <option value="mobile">Mobile</option>
                        <option value="desktop">PC</option>
                    </select>
                </div>
                <div className="editing-filter">
                    <label htmlFor="motion-level-filter">Level</label>
                    <select
                        id="motion-level-filter"
                        value={levelFilter}
                        onChange={(e) => setLevelFilter(e.target.value)}
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
                className="editing-results-status"
                id="motion-results-status"
                aria-live="polite"
            ></p>

            <div className="editing-tutorial-grid" id="motion-tutorial-grid">
                {/* Tutorial cards will be rendered here */}
            </div>
        </section>
    );
}
