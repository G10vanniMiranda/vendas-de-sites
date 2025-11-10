import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-[calc(100dvh-72px)] mt-[72px] px-6 py-16 max-w-3xl mx-auto text-gray-200">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Política de Privacidade (LGPD)</h1>
      <p className="mb-4">
        Esta Política descreve como coletamos, usamos e protegemos seus dados pessoais em conformidade com a
        Lei Geral de Proteção de Dados (LGPD).
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-3">1. Dados coletados</h2>
      <p className="mb-4">Podemos coletar nome, e-mail, telefone e informações de navegação para fins de contato e melhorias.</p>
      <h2 className="text-xl font-semibold mt-8 mb-3">2. Base legal</h2>
      <p className="mb-4">Tratamos dados com fundamento em consentimento e legítimo interesse, sempre respeitando seus direitos.</p>
      <h2 className="text-xl font-semibold mt-8 mb-3">3. Direitos do titular</h2>
      <p className="mb-4">Você pode solicitar acesso, correção, anonimização, portabilidade ou exclusão dos seus dados.</p>
      <h2 className="text-xl font-semibold mt-8 mb-3">4. Segurança</h2>
      <p className="mb-8">Adotamos medidas técnicas e organizacionais para proteger suas informações contra acessos não autorizados.</p>
      <Link href="/" className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium">
        Voltar para a Home
      </Link>
    </main>
  );
}
