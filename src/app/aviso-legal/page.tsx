import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-[calc(100dvh-72px)] mt-[72px] px-6 py-16 max-w-3xl mx-auto text-gray-200">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Aviso Legal</h1>
      <p className="mb-4">
        As informações deste site são fornecidas para fins informativos. Apesar dos esforços para manter o
        conteúdo atualizado, não garantimos sua precisão absoluta e não nos responsabilizamos por decisões
        tomadas com base nessas informações.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-3">1. Limitação de responsabilidade</h2>
      <p className="mb-4">Não nos responsabilizamos por danos diretos ou indiretos decorrentes do uso deste site.</p>
      <h2 className="text-xl font-semibold mt-8 mb-3">2. Links externos</h2>
      <p className="mb-8">Links para sites de terceiros não implicam endosso. Não temos controle sobre seu conteúdo.</p>
      <Link href="/" className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium">
        Voltar para a Home
      </Link>
    </main>
  );
}
