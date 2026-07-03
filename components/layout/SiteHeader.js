'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/team', label: 'Our Team' },
        { href: '/resources', label: 'Resources' },
    ];

    return (
        <header className="flex justify-center sticky top-0 z-[1000] px-5 py-3 bg-gradient-to-b from-[rgba(7,7,17,0.98)] via-[rgba(7,7,17,0.82)] to-transparent cursor-pointer">

            {/* NAV BAR */}
            <nav
                className={`
                    inline-flex flex-row items-center justify-center
                    px-3 py-1.5 mx-auto gap-3.5
                    max-w-[calc(100vw-28px)] w-max
                    rounded-[999px]
                    border-2 border-[rgba(117,91,178,0.5)]
                    bg-[rgba(15,13,26,0.92)]
                    shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_14px_34px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.08),0_0_34px_rgba(124,92,255,0.2)]
                    transition-all duration-[220ms]
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}
                `}
            >
                {/* LOGO */}
                <img
                    src="/logo-header.webp"
                    alt="Header Logo"
                    className="flex-shrink-0 w-[42px] h-[42px] mr-1 rounded-[12px] object-cover object-center"
                    width={42}
                    height={42}
                />

                {/* LINKS */}
                <ul className="flex flex-row items-center gap-2.5 m-0 p-0 list-none">
                    {navLinks.map((link) => (
                        <li key={link.href} className="m-0 p-0">
                            <Link
                                href={link.href}
                                className="
                                    inline-flex items-center justify-center
                                    w-[112px] h-[44px] px-4
                                    rounded-[999px]
                                    bg-[rgba(43,39,57,0.92)]
                                    text-[#e6e2ee]
                                    text-[0.92rem] font-medium
                                    whitespace-nowrap

                                    cursor-pointer
                                    transition-all duration-[220ms]
                                    ease-[cubic-bezier(0.22,1,0.36,1)]

                                    hover:bg-[#D6B600]
                                    hover:text-[#0b0b0b]
                                    hover:shadow-[0_0_18px_rgba(214,182,0,0.45)]
                                    hover:scale-[1.03]
                                    active:scale-[0.98]
                                "
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* MOBILE OVERLAY */}
            <div
                id="nav-overlay"
                className={`
                    fixed inset-0 z-[1000]
                    flex-col items-center justify-center
                    bg-[radial-gradient(circle_at_50%_18%,rgba(79,140,255,0.2),transparent_28rem),rgba(0,0,0,0.94)]
                    backdrop-blur-[15px]
                    transition-opacity duration-[300ms]
                    ease-in-out
                    ${isOverlayOpen ? 'flex opacity-100' : 'hidden opacity-0'}
                `}
            >
                {/* CLOSE BUTTON */}
                <button
                    onClick={() => setIsOverlayOpen(false)}
                    className="
                        absolute top-6 right-6
                        text-[2.5rem]
                        text-white
                        cursor-pointer
                        transition-all duration-[300ms]
                        hover:text-[#D6B600]
                    "
                >
                    ×
                </button>

                {/* MOBILE LINKS */}
                <ul className="flex flex-col gap-6 text-[1.4rem] items-center justify-center">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                onClick={() => setIsOverlayOpen(false)}
                                className="
                                    text-white font-medium
                                    cursor-pointer
                                    px-4 py-2
                                    rounded-[999px]
                                    transition-all duration-[220ms]
                                    ease-[cubic-bezier(0.22,1,0.36,1)]

                                    hover:bg-[#D6B600]
                                    hover:text-[#0b0b0b]
                                    hover:scale-[1.05]
                                "
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}