"use client";

import { Canvas } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";
import { useMemo } from "react";

export default function Hero() {
    // Cria um array de partículas distribuídas em 3D (otimizado com Float32Array)
    const points = useMemo(() => {
        const arr = Array.from({ length: 4000 }, () => [
            THREE.MathUtils.randFloatSpread(6),
            THREE.MathUtils.randFloatSpread(6),
            THREE.MathUtils.randFloatSpread(6),
        ]).flat();
        return new Float32Array(arr);
    }, []);

    return (
        <section className="relative overflow-hidden bg-[#050505] min-h-[calc(100dvh-72px)] mt-[72px] flex items-center justify-center text-center">
            {/* Fundo de partículas 3D */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <Points positions={points} stride={3}>
                        <PointMaterial
                            transparent
                            color="#00E0FF"
                            size={0.01}
                            sizeAttenuation
                            depthWrite={false}
                        />
                    </Points>
                </Canvas>
            </div>

            {/* Brilho flutuante */}
            <motion.div
                animate={{ x: [0, 200, -200, 0], y: [0, -100, 100, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-[500px] h-[500px] bg-blue-500/30 blur-3xl rounded-full z-0"
            />

            {/* Conteúdo */}
            <div className="z-10 px-6 max-w-3xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl md:text-6xl font-extrabold mb-4"
                >
                    Crie um site <span className="text-blue-400">futurista</span> e{" "}
                    <span className="text-blue-400">que vende</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="text-gray-300 max-w-2xl mx-auto mb-8"
                >
                    Sites modernos, rápidos e com design estilo IA — feitos para converter visitantes em clientes reais.
                </motion.p>

                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#plans"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold shadow-lg"
                >
                    Quero meu site agora 🚀
                </motion.a>
            </div>
        </section>
    );
}
