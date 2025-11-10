"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="relative bg-black py-12 text-center text-gray-400 overflow-hidden border-t border-blue-500/20">
            {/* Luz IA pulsante */}
            <motion.div
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-[300px] h-[300px] bg-blue-500/20 blur-3xl rounded-full bottom-[-100px] left-1/2 -translate-x-1/2"
            />

            <div className="relative z-10">
                <p>© {new Date().getFullYear()} Mi7anda Soluções — Todos os direitos reservados.</p>
                <div className="mt-4 flex justify-center gap-6 text-sm">
                    <a href="/termos" className="hover:text-blue-400">Termos de Uso</a>
                    <a href="/privacidade" className="hover:text-blue-400">Privacidade (LGPD)</a>
                    <a href="/aviso-legal" className="hover:text-blue-400">Aviso Legal</a>
                </div>
            </div>
        </footer>
    );
}
