'use client'

import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="hidden md:fixed md:top-4 md:left-1/2 md:transform md:-translate-x-1/2 md:bg-black/70 md:backdrop-blur-md md:text-white md:px-6 md:py-2 md:rounded-full md:shadow-lg md:z-50 md:block">
            <ul className="flex space-x-8">
                <li>
                    <Link
                        to="accueil"
                        smooth={true}
                        duration={500}
                        className="hover:text-gray-300 transition-colors duration-300 hover:opacity-75 cursor-pointer">
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        className="hover:text-gray-300 transition-colors duration-300 hover:opacity-75 cursor-pointer">
                        À propos
                    </Link>
                </li>
                <li>
                    <Link
                        to="portfolio"
                        smooth={true}
                        duration={500}
                        className="hover:text-gray-300 transition-colors duration-300 hover:opacity-75 cursor-pointer">
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="hover:text-gray-300 transition-colors duration-300 hover:opacity-75 cursor-pointer">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
