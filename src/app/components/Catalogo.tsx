"use client";

import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { useRef, useEffect } from "react";
import { FaRocket, FaGlobe, FaShoppingBag } from "react-icons/fa";

export default function Catalogo() {
    const produtos = [
        {
            icon: <FaRocket size={30} />,
            nome: "Landing Page de Vendas",
            publico: "Autônomos e prestadores de serviço",
            preco: "A partir de R$ 1.000",
            link: "https://wa.me/5569999787798?text=Olá! Quero saber mais sobre a Landing Page de Vendas.",
        },
        {
            icon: <FaGlobe size={30} />,
            nome: "Site Institucional Profissional",
            publico: "Empresas, escritórios e contabilidades",
            preco: "A partir de R$ 2.500",
            link: "https://wa.me/5569999787798?text=Olá! Tenho interesse em um site institucional profissional.",
        },
        {
            icon: <FaShoppingBag size={30} />,
            nome: "E-commerce Completo",
            publico: "Lojas e marcas que vendem online",
            preco: "A partir de R$ 10.000",
            link: "https://wa.me/5569999787798?text=Olá! Quero saber mais sobre o e-commerce completo.",
        },
    ];

    // Controle de animação por scroll
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) controls.start("visible");
    }, [inView, controls]);

    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 60 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        }),
    };

    return (
        <section
            id="plans"
            className="relative py-28 bg-linear-to-b from-black via-[#050505] to-[#0A0A0A] text-center overflow-hidden"
            ref={ref}
        >
            {/* Fundo com luzes IA flutuantes */}
            <motion.div
                animate={{ x: [0, 200, -200, 0], y: [0, 100, -100, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-200px] left-[-100px] w-[600px] h-[600px] bg-blue-500/10 blur-[180px] rounded-full"
            />
            <motion.div
                animate={{ x: [0, -150, 150, 0], y: [0, -50, 50, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-blue-600/10 blur-[160px] rounded-full"
            />

            {/* Etiqueta de escassez */}
            <motion.p
                initial="hidden"
                animate={controls}
                variants={fadeUp}
                custom={0}
                className="text-blue-400 uppercase tracking-widest mb-3 text-sm font-semibold relative z-10"
            >
                🚀 Vagas limitadas com desconto ativo
            </motion.p>

            {/* Título */}
            <motion.h2
                initial="hidden"
                animate={controls}
                variants={fadeUp}
                custom={1}
                className="text-4xl md:text-5xl font-bold mb-6 relative z-10"
            >
                Catálogo de <span className="text-blue-400">Sites Profissionais</span>
            </motion.h2>

            <motion.p
                initial="hidden"
                animate={controls}
                variants={fadeUp}
                custom={2}
                className="text-gray-400 max-w-2xl mx-auto mb-14 text-lg relative z-10"
            >
                Cada projeto é desenvolvido com foco em performance, conversão e
                identidade visual única, para transformar visitantes em clientes.
            </motion.p>

            {/* Cards */}
            <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
                {produtos.map((p, i) => (
                    <motion.div
                        key={i}
                        initial="hidden"
                        animate={controls}
                        variants={fadeUp}
                        custom={i + 3}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0px 0px 30px rgba(0, 140, 255, 0.25)",
                        }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="h-full bg-linear-to-b from-[#0F172A]/60 to-[#0A0A0A]/80 border border-blue-500/20 rounded-2xl p-8 flex flex-col items-center text-center backdrop-blur-md shadow-lg hover:shadow-blue-500/20 transition-all"
                    >
                        <div className="flex-1 flex flex-col items-center">
                            <div className="text-blue-400 mb-4">{p.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{p.nome}</h3>
                            <p className="text-gray-400 mb-2">{p.publico}</p>
                            <p className="text-blue-400 font-bold text-lg">{p.preco}</p>
                        </div>
                        <a
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium transition-all shadow-md cta-pulse"
                        >
                            Falar com especialista
                        </a>
                    </motion.div>
                ))}
            </div>

            {/* CTA final */}
            <motion.div
                initial="hidden"
                animate={controls}
                variants={fadeUp}
                custom={6}
                className="mt-20 relative z-10 gap-2 flex flex-col items-center"
            >
                <p className="text-gray-400 mb-4 text-lg">
                    Não sabe qual modelo é ideal pro seu negócio?
                </p>
                <a
                    href="https://wa.me/5569999787798?text=Olá! Quero descobrir qual site é ideal para o meu negócio."
                    target="_blank"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold shadow-lg cta-pulse"
                >
                    Falar agora no WhatsApp
                </a>
            </motion.div>
        </section>
    );
}
