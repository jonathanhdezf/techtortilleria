import React from 'react';
import { cn } from "../../lib/utils";

export default function Logo({ className, variant = 'default', isStatic = false }: { className?: string, variant?: 'default' | 'premium', isStatic?: boolean }) {
    if (variant === 'premium') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 180" className={cn(className, "min-w-[140px]")}>
                <defs>
                    <linearGradient id="premiumGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FACC15" />
                        <stop offset="100%" stopColor="#EAB308" />
                    </linearGradient>
                    <filter id="premiumGlow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="5" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                    <clipPath id="premiumTypewriterClip">
                        <rect id="premiumTypeRect" x="0" y="10" width="450" height="40" fill="white" />
                    </clipPath>
                </defs>
                <style>{`
                    @keyframes premiumTypewriter { 
                        0% { transform: scaleX(0); } 
                        45%, 90% { transform: scaleX(1); } 
                        100% { transform: scaleX(0); } 
                    }
                    #premiumTypeRect { 
                        transform-origin: left; 
                        transform-box: fill-box;
                        ${isStatic ? '' : 'animation: premiumTypewriter 5s steps(30) infinite;'} 
                    }
                    @media (max-width: 400px) {
                        .logo-slogan { display: none; }
                    }
                `}</style>
                <g className="premium-icon">
                    <rect x="20" y="30" width="100" height="100" rx="28" fill="url(#premiumGrad)" filter="url(#premiumGlow)" />
                    <path d="M 45 60 L 75 80 L 45 100" stroke="#18181B" strokeWidth="12" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="85" y="95" width="20" height="12" rx="4" fill="#18181B" />
                </g>
                <g transform="translate(145, 100)">
                    <text x="0" y="0" className="font-sans font-black" fontSize="72" fill="white" letterSpacing="-2">
                        Tech<tspan fill="#FACC15">Tortillería</tspan>
                    </text>
                    <text x="2" y="35" className="logo-slogan font-mono font-bold" fontSize="16" fill="#FACC15" opacity="0.6" letterSpacing="4" clipPath="url(#premiumTypewriterClip)">
                        &gt; Iniciando_masa.exe _
                    </text>
                </g>
            </svg>
        );
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 220" className={className}>
            <defs>
                <linearGradient id="tortillaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFE066" />
                    <stop offset="50%" stopColor="#FFCA28" />
                    <stop offset="100%" stopColor="#FFA000" />
                </linearGradient>
                <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="10" stdDeviation="15" floodColor="#FFA000" floodOpacity="0.25" />
                </filter>
                <filter id="burnBlur">
                    <feGaussianBlur stdDeviation="7" />
                </filter>
                <clipPath id="squircleClip">
                    <rect x="40" y="40" width="140" height="140" rx="45" />
                </clipPath>
                <clipPath id="typewriterClip">
                    <rect id="typeRect" x="0" y="-15" width="300" height="30" fill="white" />
                </clipPath>
            </defs>

            <style>{`
                @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
                @keyframes dash { from { stroke-dashoffset: 60; } to { stroke-dashoffset: 0; } }
                @keyframes typewriter { 0% { transform: scaleX(0); } 40%, 90% { transform: scaleX(1); } 100% { transform: scaleX(0); } }
                @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
                .floating-icon { ${isStatic ? '' : 'animation: float 5s ease-in-out infinite;'} transform-origin: center; }
                .circuit-lines { stroke-dasharray: 4 12; ${isStatic ? '' : 'animation: dash 3s linear infinite;'} }
                #typeRect { transform-origin: left; ${isStatic ? '' : 'animation: typewriter 5s steps(20) infinite;'} }
                .cursor-blink { ${isStatic ? '' : 'animation: blink 1s step-end infinite;'} }
                .font-tech { font-family: monospace; font-weight: 700; }
                .font-torta { font-family: sans-serif; font-weight: 900; letter-spacing: -1px; }
            `}</style>

            <g className="floating-icon">
                <rect x="40" y="40" width="140" height="140" rx="45" fill="url(#tortillaGrad)" filter="url(#softShadow)" />
                <g clipPath="url(#squircleClip)" opacity="0.18" fill="#5D4037" filter="url(#burnBlur)">
                    <circle cx="65" cy="55" r="22" />
                    <circle cx="155" cy="150" r="28" />
                    <circle cx="160" cy="65" r="15" />
                    <circle cx="60" cy="160" r="18" />
                </g>
                <g clipPath="url(#squircleClip)" stroke="#FFFFFF" strokeWidth="2.5" fill="none" opacity="0.35" strokeLinecap="round" strokeLinejoin="round">
                    <path className="circuit-lines" d="M 20 90 L 50 90 L 70 70 L 70 20" />
                    <circle cx="70" cy="20" r="3.5" fill="#FFFFFF" />
                    <path className="circuit-lines" d="M 200 130 L 170 130 L 150 150 L 150 200" />
                    <circle cx="150" cy="200" r="3.5" fill="#FFFFFF" />
                    <path className="circuit-lines" d="M 40 160 L 60 140 L 60 120" />
                </g>
                <g stroke="#2C1A12" strokeWidth="15" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M 72 75 L 102 105 L 72 135" />
                    <line className="cursor-blink" x1="120" y1="135" x2="155" y2="135" />
                </g>
            </g>

            <g transform="translate(210, 115)">
                <text x="0" y="0" className="font-tech" fontSize="56" fill="white">Tech</text>
                <text x="145" y="0" className="font-torta" fontSize="56" fill="#FACC15">Tortillería</text>
            </g>

            <g transform="translate(215, 155)">
                <text x="0" y="0" className="font-tech" fontSize="16" fill="#FACC15" letterSpacing="1" clipPath="url(#typewriterClip)">
                    &gt; INICIANDO_MASA.EXE
                </text>
            </g>
        </svg>
    );
}
