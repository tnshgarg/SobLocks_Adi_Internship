"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20">

            <div className="max-w-7xl mx-auto px-8 text-center space-y-12 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-6 max-w-4xl mx-auto"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-6xl lg:text-7xl font-extrabold font-headline leading-[1] tracking-tight text-white"
                    >
                        Discover <span className="text-orange-500">high-growth</span>
                        <br />
                        property investments
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed font-medium"
                    >
                        Join the CEG Equity Token batch. Start building your portfolio with fractional ownership of global assets.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="pt-4"
                    >
                        <button className="px-10 py-4 btn-gradient rounded-2xl text-white font-bold text-lg shadow-2xl shadow-primary/30 flex items-center gap-3 mx-auto transition-transform hover:scale-105 active:scale-95">
                            Start Earning Now
                            <span className="material-symbols-outlined font-bold">arrow_forward</span>
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
