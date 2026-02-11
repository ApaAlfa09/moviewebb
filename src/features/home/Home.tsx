export function Home() {
    return(
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
                {/* Fondo decorativo */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
                </div>

                {/* Contenido */}
                <div className="relative z-10 text-center max-w-4xl mx-auto">
                    <h1 className="text-7xl md:text-8xl font-black text-white mb-6 drop-shadow-2xl">
                        🎬 CineMax
                    </h1>
                    <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
                        Tu plataforma de películas favoritas
                    </p>
                    <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Explora una increíble colección de películas, descubre detalles fascinantes y disfruta de una experiencia cinematográfica única.
                    </p>
                    
                    {/* Botones de acción */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/movies"
                            className="px-10 py-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold text-lg rounded-lg transition duration-300 transform hover:scale-105 shadow-lg"
                        >
                            🎥 Explorar Películas
                        </a>
                        <a
                            href="#"
                            className="px-10 py-4 bg-gray-700 hover:bg-gray-600 text-white font-bold text-lg rounded-lg transition duration-300 transform hover:scale-105 shadow-lg"
                        >
                            ℹ️ Más Información
                        </a>
                    </div>
                </div>
            </section>

            {/* Sección de características */}
            <section className="py-20 px-6 bg-gray-950">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-white text-center mb-16">¿Por qué elegirnos?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition">
                            <div className="text-5xl mb-4">🎬</div>
                            <h3 className="text-2xl font-bold text-white mb-3">Variedad</h3>
                            <p className="text-gray-400">Amplio catálogo de películas de todos los géneros y épocas</p>
                        </div>
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-yellow-500 transition">
                            <div className="text-5xl mb-4">⭐</div>
                            <h3 className="text-2xl font-bold text-white mb-3">Calidad</h3>
                            <p className="text-gray-400">Información detallada con sinopsis, duración y directores</p>
                        </div>
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition">
                            <div className="text-5xl mb-4">🎞️</div>
                            <h3 className="text-2xl font-bold text-white mb-3">Experiencia</h3>
                            <p className="text-gray-400">Interfaz intuitiva y diseño cinematográfico</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}