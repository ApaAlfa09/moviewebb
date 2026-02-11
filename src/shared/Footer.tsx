export function Footer() {
    return(
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black border-t-4 border-red-500 py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Sobre nosotros */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            🎬 CineMax
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            Tu plataforma de películas favorita. Descubre, explora y disfruta de una increíble experiencia cinematográfica.
                        </p>
                    </div>

                    {/* Enlaces rápidos */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Enlaces Rápidos</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="/" className="hover:text-red-500 transition">Inicio</a></li>
                            <li><a href="/movies" className="hover:text-red-500 transition">Películas</a></li>
                            <li><a href="#" className="hover:text-red-500 transition">Contacto</a></li>
                        </ul>
                    </div>

                    {/* Redes sociales */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Síguenos</h4>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-red-500 transition text-2xl">📱</a>
                            <a href="#" className="text-gray-400 hover:text-red-500 transition text-2xl">🐦</a>
                            <a href="#" className="text-gray-400 hover:text-red-500 transition text-2xl">📧</a>
                        </div>
                    </div>
                </div>

                {/* Separador */}
                <hr className="border-gray-700 my-8" />

                {/* Copyright */}
                <div className="text-center text-gray-500 text-sm">
                    <p>&copy; 2026 CineMax. Todos los derechos reservados. Hecho con ❤️ para las películas.</p>
                </div>
            </div>
        </footer>
    );
}