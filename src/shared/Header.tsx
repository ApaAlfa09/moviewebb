import { Link } from "react-router-dom";

export function Header() {
    return(
        <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-black shadow-2xl border-b-4 border-red-500 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <span className="text-4xl">🎬</span>
                        <span className="text-2xl font-black text-white group-hover:text-red-500 transition">
                            CineMax
                        </span>
                    </Link>

                    {/* Navegación */}
                    <nav className="flex items-center gap-8">
                        <Link 
                            to="/" 
                            className="text-gray-300 hover:text-red-500 font-semibold text-lg transition duration-300 relative group"
                        >
                            🏠 Inicio
                            <span className="absolute bottom-0 left-0 w-0 h-1 bg-red-500 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link 
                            to="/movies" 
                            className="text-gray-300 hover:text-yellow-500 font-semibold text-lg transition duration-300 relative group"
                        >
                            🎥 Películas
                            <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}