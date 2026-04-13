"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute top-0 w-full z-50"
        >
            <div className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
                <div className="flex items-center gap-12">
                    <a className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-white font-headline" href="#">
                        <img
                            src="/assets/Logo.png"
                            alt="Stake Logo"
                            className="w-10 h-10 object-contain"
                        />
                        <span>Sta<span className="text-[#ff8c42]">k</span>e</span>
                    </a>
                    <div className="hidden md:flex gap-8 items-center font-headline font-semibold text-sm">
                        <a className="text-white/80 hover:text-white transition-colors" href="#">Properties</a>
                        <a className="text-white/80 hover:text-white transition-colors" href="#">Digital Assets</a>
                        <a className="text-white/80 hover:text-white transition-colors" href="#">Stake & Earn</a>
                    </div>
                </div>
                <div className="flex items-center gap-6 font-headline font-semibold text-sm">
                    <button className="text-white hover:text-primary transition-all">Login</button>
                    <button className="px-7 py-2.5 btn-gradient rounded-3xl text-white shadow-lg shadow-primary/20 active:scale-95 transition-all">Sign Up</button>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
