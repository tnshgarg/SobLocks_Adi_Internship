"use client";

import React from 'react';
import { motion } from 'framer-motion';

const PriceProgression = () => {
    return (
        <section className="max-w-7xl mx-auto px-8 mt-24">
            <div className="relative bg-[#1a1f26]/40 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/5 shadow-2xl overflow-hidden">
                {/* Two Gradient Circles in Background */}
                <div className="absolute top-[80px] right-[80px] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#ff8c42]/40 to-[#ff5722]/20 blur-3xl"></div>
                <div className="absolute bottom-[60px] left-[60px] w-[250px] h-[250px] rounded-full bg-gradient-to-tr from-[#ff8c42]/30 to-[#ff8c42]/5 blur-3xl"></div>

                <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                        <h2 className="text-2xl font-headline font-extrabold text-[#ff8c42]">Price Progression (200 Tokens)</h2>
                        <div className="flex gap-2">
                            <span className="px-4 py-1.5 bg-gray-300 border border-white/10 rounded-lg text-[10px] font-bold text-black uppercase tracking-widest">Sold Out 1-3</span>
                            <span className="px-4 py-1.5 bg-green-100 border border-[#4caf50]/40 rounded-lg text-[10px] font-bold text-[#4caf50] uppercase tracking-widest">Active 4</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {/* Batch Items */}
                        {[
                            { name: "Batch 1", price: "$4,000", status: "sold" },
                            { name: "Batch 2", price: "$4,250", status: "sold" },
                            { name: "Batch 3", price: "$4,500", status: "sold" },
                            { name: "Batch 4", price: "$4,750", status: "active" },
                            { name: "Batch 5", price: "$5,000", status: "future" },
                            { name: "Batch 6", price: "$5,250", status: "future" },
                        ].map((batch, index) => (
                            <motion.div
                                key={batch.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`p-6 rounded-2xl border transition-all ${batch.status === 'active'
                                    ? 'bg-[#0d1117]/60 ring-2 ring-[#ff8c42] shadow-2xl shadow-primary/10 -translate-y-1'
                                    : 'bg-[#0d1117]/60 border-white/5 hover:border-white/10'
                                    } ${batch.status === 'future' ? 'opacity-50' : ''}`}
                            >
                                <div className={`text-[10px] font-bold mb-4 uppercase ${batch.status === 'active' ? 'text-[#ff8c42]' : 'text-white/40'}`}>
                                    {batch.name}
                                </div>
                                <div className={`text-xl font-headline font-bold ${batch.status === 'active' ? 'text-[#ff8c42]' : 'text-white'}`}>
                                    {batch.price}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PriceProgression;