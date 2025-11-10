export default function Portfolio() {
    return (
        <section id="portfolio" className="py-24 bg-linear-to-b from-black to-[#0A0A0A] text-center">
            <h3 className="text-3xl font-semibold mb-10">
                Alguns <span className="text-blue-400">projetos recentes</span>
            </h3>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
                {[1, 2, 3].map((i) => (
                    <div
                        key={i}
                        className="bg-black/40 border border-blue-500/20 rounded-xl p-6 hover:scale-105 transition-transform"
                    >
                        <div className="aspect-video bg-blue-500/20 rounded-md mb-4" />
                        <h4 className="font-bold text-lg mb-2">Projeto {i}</h4>
                        <p className="text-gray-400 text-sm mb-4">Site moderno e otimizado para conversão.</p>
                        <a
                            href="https://wa.me/5569999787798"
                            target="_blank"
                            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-sm text-white"
                        >
                            Quero um igual
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
