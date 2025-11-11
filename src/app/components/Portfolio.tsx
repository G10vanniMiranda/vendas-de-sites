interface Project {
    title: string;
    description: string;
    url: string;
    cta: string;
    image?: string; // future enhancement: real thumbnail
}

const projects: Project[] = [
    {
        title: "Mahal Sushi Bar",
        description: "Landing page elegante para restaurante japonês focada em reservas e destaque visual de pratos.",
        url: "https://www.mahalsushibar.com/",
        cta: "Ver projeto",
        image: "/mahalsushibar.jpg", // placeholder, pode trocar por '/images/mahal-thumb.jpg'
    },
    {
        title: "Dr. Leonardo Lima",
        description:
            "Landing page profissional para médico com foco em credibilidade, diferenciais e agendamento.",
        url: "https://leonardo-lima.vercel.app/",
        cta: "Ver projeto",
        image: "/leonardolima.jpg", // placeholder, pode trocar por '/images/dr-leonardo-thumb.jpg'
    },
    {
        title: "SS Contabilidade",
        description:
            "Site institucional para escritório contábil, destacando serviços, autoridade e captação de leads.",
        url: "https://www.contabilidadess.com.br/",
        cta: "Ver projeto",
        image: "/sscontabilidade.jpg", // placeholder, pode trocar por '/images/ss-contabilidade-thumb.jpg'
    },
];

import Image from "next/image";

export default function Portfolio() {
    return (
        <section
            id="portfolio"
            className="py-24 bg-linear-to-b from-black to-[#0A0A0A] text-center"
        >
            <h2 className="text-3xl font-semibold mb-10">
                Alguns <span className="text-blue-400">projetos recentes</span>
            </h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
                {projects.map((p) => (
                    <div
                        key={p.title}
                        className="bg-black/40 border border-blue-500/20 rounded-xl p-6 hover:scale-105 transition-transform"
                    >
                        <div className="aspect-video bg-blue-500/20 rounded-md mb-4 flex items-center justify-center text-blue-300 text-sm overflow-hidden">
                            {p.image ? (
                                <Image
                                    src={p.image}
                                    alt={p.title}
                                    width={640}
                                    height={360}
                                    className="h-full w-full object-cover rounded-md"
                                    loading="lazy"
                                />
                            ) : (
                                <span>Prévia em breve</span>
                            )}
                        </div>
                        <h3 className="font-bold text-lg mb-2">{p.title}</h3>
                        <p className="text-gray-400 text-sm mb-4">{p.description}</p>
                        <a
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-sm text-white shadow-sm"
                        >
                            {p.cta}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
