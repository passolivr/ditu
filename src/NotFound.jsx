import React from 'react';
import { Link } from 'react-router-dom';
import { FiSun, FiMoon } from 'react-icons/fi';

function NotFound({ darkMode, toggleDarkMode }) {
    return (
        <div className={`min-h-screen flex flex-col justify-between ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
            {/* Dark Mode Switch */}
            <div className="fixed top-4 right-4 z-50">
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} className="sr-only" />
                    <div className="w-14 h-8 bg-gray-200 rounded-full border border-gray-400 dark:bg-gray-700">
                        <div className={`dot absolute left-1 top-1 w-6 h-6 rounded-full transition ${darkMode ? 'transform translate-x-6 bg-[#373CFA]' : 'bg-gray-800'}`}>
                            {darkMode ? <FiSun className="text-xs text-white mx-auto flex items-center justify-center h-full" /> : <FiMoon className="text-xs text-white mx-auto flex items-center justify-center h-full" />}
                        </div>
                    </div>
                </label>
            </div>
            <div className="flex flex-col items-center justify-center flex-grow">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <p className="text-2xl mb-8">Hoppá! Ezt az oldalt elnyelte a digitális világ.</p>
                <Link to="/" className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-800' : 'bg-[#373CFA] text-white hover:bg-blue-800'}`}>
                    Vissza a kezdőlapra
                </Link>
            </div>
            <footer className={`py-6 w-full ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-[#373CFA] text-white'}`}>
                <div className="text-center space-y-2">
                    <p className="text-sm">
                        © {new Date().getFullYear()} Digitális Írástudás Program
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default NotFound;
