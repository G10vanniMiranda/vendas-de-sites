import Link from "next/link";

export default function Page() {
    return (
        <main className="min-h-[calc(100dvh-72px)] mt-[72px] px-6 py-16 max-w-3xl mx-auto text-gray-200">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Termos de Uso</h1>
            <p className="mb-4">
                Bem-vindo aos Termos de Uso da Mi7anda Soluções. Ao utilizar este site, você concorda com
                as condições descritas abaixo. Recomendamos a leitura atenta deste documento.
            </p>
            <h2 className="text-xl font-semibold mt-8 mb-3">1. Uso do site</h2>
            <p className="mb-4">Você se compromete a utilizar o site de forma lícita e em conformidade com a legislação vigente.</p>
            <h2 className="text-xl font-semibold mt-8 mb-3">2. Propriedade intelectual</h2>
            <p className="mb-4">Todo o conteúdo exibido neste site é protegido por direitos autorais e demais normas aplicáveis.</p>
            <h2 className="text-xl font-semibold mt-8 mb-3">3. Contato</h2>
            <p className="mb-8">Para dúvidas sobre estes termos, entre em contato pelos canais informados no site.</p>

            <Link href="/" className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium">
                Voltar para a Home
            </Link>
        </main>
    );
}
