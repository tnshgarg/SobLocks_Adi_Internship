import React from 'react';
import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import VisualSection from '@/app/components/VisualSection';
import PriceProgression from '@/app/components/PriceProgression';

export default function Home() {
    return (
        <div className="min-h-screen relative">
            {/* Unified Background */}
            <div className="absolute inset-0 z-0 h-[100%] pointer-events-none">
                <img
                    alt=""
                    className="w-full h-full object-cover object-top"
                    src="/bg.png"
                />
                <div className="hero-gradient-overlay absolute inset-0"></div>
            </div>

            <div className="relative z-10">
                <Navbar />
                <main>
                    <Hero />
                    <VisualSection />
                    <PriceProgression />
                </main>
                {/* <Footer /> */}
            </div>
        </div>
    );
}
