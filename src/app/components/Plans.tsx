export default function Plans() {
    const plans = [
        {
            title: "Plano Profissional",
            price: "R$ 1.000 à vista",
            desc: "Ideal para quem quer um site completo, com domínio, hospedagem e SEO.",
            cta: "Fechar agora",
        },
        {
            title: "Plano Mensal",
            price: "R$ 2.000/mês + comissão",
            desc: "Inclui manutenção, atualizações e gestão de tráfego pago.",
            cta: "Quero esse plano",
        },
    ];

    return (
        <section id="plans" className="py-24 bg-black text-center">
            <h3 className="text-3xl font-semibold mb-12">
                Escolha seu <span className="text-blue-400">plano ideal</span>
            </h3>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
                {plans.map((plan, i) => (
                    <div
                        key={i}
                        className="bg-[#0A0A0A]/80 border border-blue-500/20 rounded-xl p-8 hover:scale-105 transition-transform"
                    >
                        <h4 className="text-xl font-bold mb-2 text-blue-400">{plan.title}</h4>
                        <p className="text-gray-400 mb-4">{plan.desc}</p>
                        <p className="text-2xl font-bold mb-6">{plan.price}</p>
                        <a
                            href="https://wa.me/5569999787798"
                            target="_blank"
                            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium"
                        >
                            {plan.cta}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
