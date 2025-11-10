export default function Header() {
    return (
        <header className="fixed w-full z-50 bg-black/40 backdrop-blur-lg border-b border-blue-500/20">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                <h1 className="text-xl font-bold text-blue-400 tracking-wider">
                    Mi7anda Soluções
                </h1>
                <nav className="flex items-center gap-6 text-sm">
                    <a href="#benefits" className="hover:text-blue-400">Benefícios</a>
                    <a href="#portfolio" className="hover:text-blue-400">Portfólio</a>
                    <a href="#plans" className="hover:text-blue-400">Planos</a>
                    <a
                        href="#contact"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-all"
                    >
                        Quero meu site
                    </a>
                </nav>
            </div>
        </header>
    );
}
