"use client";

import { motion } from "framer-motion";
import {
    FiInstagram,
    FiFacebook,
    FiMail,
    FiPhone,
    FiMapPin,
    FiArrowUpRight,
    FiArrowUp,
} from "react-icons/fi";
import Link from "next/link";

const WHATSAPP_LINK =
    "https://wa.me/5569999787798?text=Olá! Quero criar meu site profissional com a Mi7anda Agência de Marketing.";
const EMAIL = "contato@mi7anda.com.br";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative border-t border-blue-500/20 bg-[#0A0A0A] text-slate-300">
            {/* Glow IA de fundo */}
            <motion.div
                aria-hidden="true"
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute inset-x-1/2 bottom-[-140px] h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl"
            />

            <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 relative">
                {/* CTA final forte */}
                <div className="mb-10 rounded-2xl border border-blue-500/20 bg-black/40 p-6 backdrop-blur-md md:p-8">
                    <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                        <div>
                            <p className="text-blue-400 uppercase tracking-widest text-xs font-semibold">
                                🚀 Vagas limitadas com desconto ativo
                            </p>
                            <h3 className="mt-2 text-2xl font-bold text-white">
                                Pronto para ter um <span className="text-blue-400">site que vende</span>?
                            </h3>
                            <p className="mt-1 text-sm text-slate-400">
                                Fale agora no WhatsApp e receba um diagnóstico gratuito do seu projeto.
                            </p>
                        </div>

                        <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-md bg-blue-500 px-5 py-3 font-semibold text-white transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black"
                        >
                            Falar no WhatsApp <FiArrowUpRight className="text-white" />
                        </a>
                    </div>
                </div>

                {/* Grid principal */}
                <div className="grid gap-10 md:grid-cols-[1.2fr,1fr,1fr]">
                    {/* Coluna 1: Marca */}
                    <div>
                        <h4 className="text-xl font-bold tracking-wide text-blue-300">
                            Mi7anda Agência de Marketing
                        </h4>
                        <p className="mt-3 text-sm text-slate-400">
                            Criação de sites profissionais, landing pages e e-commerces com foco em
                            <span className="text-slate-200"> performance</span>,
                            <span className="text-slate-200"> SEO</span> e
                            <span className="text-slate-200"> conversão</span>.
                        </p>

                        <div className="mt-4 flex items-center gap-4">
                            <a
                                href="https://instagram.com/mi7anda"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram da Mi7anda"
                                className="rounded-md border border-blue-500/20 p-2 text-slate-200 transition hover:border-blue-500/40 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black"
                            >
                                <FiInstagram />
                            </a>
                            <a
                                href="https://facebook.com/mi7anda"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook da Mi7anda"
                                className="rounded-md border border-blue-500/20 p-2 text-slate-200 transition hover:border-blue-500/40 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black"
                            >
                                <FiFacebook />
                            </a>
                        </div>
                    </div>

                    {/* Coluna 2: Navegação */}
                    <nav aria-label="Links úteis" className="text-sm">
                        <h5 className="mb-3 font-semibold text-white">Navegação</h5>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#benefits" className="hover:text-blue-400">
                                    Benefícios
                                </Link>
                            </li>
                            <li>
                                <Link href="#portfolio" className="hover:text-blue-400">
                                    Portfólio
                                </Link>
                            </li>
                            <li>
                                <Link href="#plans" className="hover:text-blue-400">
                                    Catálogo de Sites
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="hover:text-blue-400">
                                    Contato
                                </Link>
                            </li>
                            <li className="pt-2">
                                <Link href="/termos" className="hover:text-blue-400">
                                    Termos de Uso
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacidade" className="hover:text-blue-400">
                                    Privacidade (LGPD)
                                </Link>
                            </li>
                            <li>
                                <Link href="/aviso-legal" className="hover:text-blue-400">
                                    Aviso Legal
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Coluna 3: Contato (SEO Local) */}
                    <address className="not-italic text-sm">
                        <h5 className="mb-3 font-semibold text-white">Contato</h5>
                        <p className="mb-2 flex items-center gap-2">
                            <FiMapPin className="text-blue-400" />
                            Porto Velho - RO, Brasil
                        </p>
                        <p className="mb-2 flex items-center gap-2">
                            <FiMail className="text-blue-400" />
                            <a href={`mailto:${EMAIL}`} className="hover:text-blue-400">
                                {EMAIL}
                            </a>
                        </p>
                        <p className="mb-4 flex items-center gap-2">
                            <FiPhone className="text-blue-400" />
                            <a href="tel:+5569999787798" className="hover:text-blue-400">
                                +55 (69) 9 9998-7798
                            </a>
                        </p>

                        <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-md border border-blue-500/30 px-4 py-2 font-medium text-white transition hover:bg-blue-600 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black"
                        >
                            Falar no WhatsApp <FiArrowUpRight />
                        </a>
                    </address>
                </div>

                {/* Linha final */}
                <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-400 md:flex-row">
                    <p>© {year} Mi7anda Agência de Marketing — Todos os direitos reservados.</p>

                    <div className="flex items-center gap-4">
                        <span>Site seguro • SSL ativo</span>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            className="inline-flex items-center gap-1 rounded-md border border-white/10 px-2 py-1 text-slate-300 transition hover:border-blue-500/40 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black"
                            aria-label="Voltar ao topo"
                        >
                            <FiArrowUp /> Topo
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
