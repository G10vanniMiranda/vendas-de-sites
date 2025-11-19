"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed w-full z-50 bg-black/40 backdrop-blur-md border-b border-blue-500/20">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 hover:scale-150 transition-transform" aria-label="Ir para a Home">
                    <Image
                        src="/logo.png"
                        alt="Mi7anda Soluções"
                        width={160}
                        height={40}
                        priority
                        className="h-20 w-auto"
                    />
                    <span className="sr-only">Mi7anda Soluções</span>
                </Link>

                {/* Menu desktop */}
                <nav className="hidden md:flex items-center  gap-8 text-sm">
                    <Link href="#benefits" className="hover:text-blue-400 transition-colors">
                        Benefícios
                    </Link>
                    <Link href="#portfolio" className="hover:text-blue-400 transition-colors">
                        Portfólio
                    </Link>
                    <Link href="#plans" className="hover:text-blue-400 transition-colors">
                        Planos
                    </Link>
                    <Link
                        href="https://wa.me/5569999787798?text=Ol%C3%A1! Quero criar meu site profissional com a Mi7anda."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium transition-all shadow-md cta-pulse"
                    >
                        Quero meu site
                    </Link>
                </nav>

                {/* Botão mobile */}
                <button
                    className="md:hidden text-blue-400 text-2xl"
                    onClick={() => setOpen(!open)}
                    aria-label="Menu"
                >
                    {open ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Menu mobile */}
            <AnimatePresence>
                {open && (
                    <motion.nav
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-black/95 backdrop-blur-lg border-t border-blue-500/20 flex flex-col items-center gap-6 py-6"
                    >
                        <Link
                            href="#benefits"
                            onClick={() => setOpen(false)}
                            className="hover:text-blue-400 text-lg transition-colors"
                        >
                            Benefícios
                        </Link>
                        <Link
                            href="#portfolio"
                            onClick={() => setOpen(false)}
                            className="hover:text-blue-400 text-lg transition-colors"
                        >
                            Portfólio
                        </Link>
                        <Link
                            href="#plans"
                            onClick={() => setOpen(false)}
                            className="hover:text-blue-400 text-lg transition-colors"
                        >
                            Planos
                        </Link>
                        <Link
                            href="https://wa.me/5569999787798?text=Ol%C3%A1! Quero criar meu site profissional com a Mi7anda."
                            onClick={() => setOpen(false)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium transition-all shadow-lg cta-pulse"
                        >
                            Quero meu site 🚀
                        </Link>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
