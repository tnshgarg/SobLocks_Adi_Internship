"use client";

import React from 'react';
import { motion } from 'framer-motion';

const VisualSection = () => {
    return (
        <section className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
            {/* Left Puzzle Area */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-9 relative"
            >
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 h-full">
                    <img
                        alt="Puzzle Frame"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida/ADBb0ugjtOiyKaXzEl8OrBQmKGHNuCP8MNaauPNIUmdasZUoCZUDyYR7uUIRzLYTvcJDJYwIvoFq0DPuFzPk_NiysMvNTG-UZVQmCgkZN5gesAwb3VikErhpTIVJXHttdCCRoepB5Ra3zoUKHwPD_rgHCaq-MXn5lIP3BR16FK0Ts6XNY7TrwIFfH0thcuSeIaw-53TA6Zy81w4-1eR3DqkUaT_tUIV891b_fY7kakihhk21Cxa3jaGqWrWabwQp0nGQDNDXh7jHgfS1Mw"
                    />
                    {/* Floating Piece */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.img
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                                y: [0, -15, 0]
                            }}
                            transition={{
                                opacity: { duration: 0.5 },
                                scale: { duration: 0.5 },
                                y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
                            }}
                            alt="Puzzle Piece"
                            className="w-32 md:w-44 lg:w-56 drop-shadow-2xl -translate-x-8 translate-y-32"
                            src="https://lh3.googleusercontent.com/aida/ADBb0uhk0XEyiXZMLtYeonyYB8ESAW227Y3eZh28t80Bl-Sno_94bKW1t4Rau3qkpDEHtWTFLG_Heca5OW3s0Zsm-2B_VkP9HtucVMU-IeScpvKp1pPjTpfpCUFOxyJr0b3344Z_kRYjVz5ebcMS4BFwU9cPitr3hlc9fv6JYyXumocT_BGzpftl0cu8iPhIpA7qyo98UpSEJoZ7VtaULom4NHinnVbUywopiaXVL2EEpqRLxFKI5DzL-E3j2hXxtruuuin1wGnVRlIFWg"
                        />
                    </div>
                    {/* Bottom transparency gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d121f] via-transparent to-transparent pointer-events-none"></div>
                </div>
                {/* Arrow Indicator */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 0.9, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="absolute -right-12 top-[48%] -translate-y-1/2 hidden xl:block z-20"
                >
                    <img
                        alt="Arrow"
                        className="w-72"
                        src="https://lh3.googleusercontent.com/aida/ADBb0uih_b0l1PnPjS6IE3Pz-jixt3nmEN6Tak4LleUc_Nip4EG878AYQv79QALcCqVSIhJqdu1dfiHF65ONpfzOMrbgRJQLT556HxGfUdkm3M1InspOWH0L2ldeAOvuDVOqIqFcOGm3jTX3LLmqxlN1fnvRl8VnKsMBVdLk8RUVEXe-FOsps8LNrA_hLtkRB3sFg3Oq0CabqXw2nza2ZvLfy_5cIdySWpW721DiV3bdI6WLD3NJQTe80odFtOy-5BQjs4IFk-KESx7h5g"
                    />
                </motion.div>
            </motion.div>
            {/* Right Info Area */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-3 space-y-20 pl-4"
            >
                <div className="space-y-4">
                    <h2 className="text-6xl font-extrabold font-headline leading-[1.05] text-white tracking-tight">
                        Access premium property ownership <span className="text-[#ff8c42]">for $150</span>
                    </h2>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-white/5 backdrop-blur-xl p-5 rounded-xl border border-white shadow-2xl max-w-[280px]"
                >
                    <div className="flex items-center gap-2.5 mb-3">
                        <img
                            src="/assets/Logo.png"
                            alt="Stake Logo"
                            className="w-7 h-6 object-contain"
                        />
                        <span className="text-[10px] font-bold text-white uppercase tracking-widest">All Time Returns</span>
                    </div>
                    <div className="flex items-baseline justify-between gap-4">
                        <div className="text-2xl font-headline font-bold text-white whitespace-nowrap">AED 165,000</div>
                        <div className="text-[#4caf50] font-bold">+111%</div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default VisualSection;
