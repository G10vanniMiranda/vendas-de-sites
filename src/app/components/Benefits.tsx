import { FaRocket, FaRobot, FaGlobe, FaMobileAlt } from "react-icons/fa";

export default function Benefits() {
    const items = [
        { icon: <FaRocket size={28} />, title: "Alta Conversão", desc: "Páginas projetadas para gerar vendas e leads todos os dias." },
        { icon: <FaRobot size={28} />, title: "Estilo IA", desc: "Design futurista com toques tecnológicos e efeitos modernos." },
        { icon: <FaGlobe size={28} />, title: "SEO e Performance", desc: "Otimizado para aparecer no Google e carregar em segundos." },
        { icon: <FaMobileAlt size={28} />, title: "Design Responsivo", desc: "Perfeito em qualquer tela — celular, tablet ou desktop." },
    ];

    return (
        <section id="benefits" className="py-24 text-center relative">
            <h2 className="text-3xl font-semibold mb-12">
                Por que <span className="text-blue-400">ter um site profissional</span>?
            </h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="bg-black/40 border border-blue-500/20 rounded-xl p-6 hover:scale-105 transition-transform"
                    >
                        <div className="text-blue-400 mb-4 flex justify-center">{item.icon}</div>
                        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>
            <div className="mt-12">
                <a
                    href="#plans"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium transition-all"
                >
                    Quero um site assim 🔥
                </a>
            </div>
        </section>
    );
}
