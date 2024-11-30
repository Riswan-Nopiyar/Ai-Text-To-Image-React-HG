import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle theme between dark and light
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Apply the theme on load
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Handle scroll event
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      style={{ zIndex: 2147483647 }}
      className={`fixed top-0 left-0 w-full transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-[rgb(11,15,25)] shadow-lg' : 'bg-transparent dark:bg-transparent shadow-none'}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-gray-800 dark:text-white">
          AI Tool
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 ml-auto mr-6">
          <li>
            <a
              href="#home"
              className="text-gray-800 hover:text-purple-500 dark:text-white dark:hover:text-purple-400 transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="https://www.nopiyar.my.id/p/riswan-nopiyar.html"
              target="_blank"
              className="text-gray-800 hover:text-purple-500 dark:text-white dark:hover:text-purple-400 transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#Services"
              className="text-gray-800 hover:text-purple-500 dark:text-white dark:hover:text-purple-400 transition"
            >
              Services
            </a>
          </li>
        </ul>

        {/* Dark/Light Mode Toggle and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle Button */}
          <button onClick={toggleTheme} className="text-gray-800 dark:text-white">
            {/* Sun Icon (Light Mode) */}
            <svg
              id="sun-icon"
              className={`w-6 h-6 ${theme === 'light' ? 'hidden' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M19.36 19.36l1.42 1.42M2 12h2M20 12h2M4.22 19.36l1.42-1.42M19.36 4.22l1.42-1.42M12 6a6 6 0 100 12 6 6 0 000-12z"
              />
            </svg>

            {/* Moon Icon (Dark Mode) */}
            <svg
              id="moon-icon"
              className={`w-6 h-6 ${theme === 'dark' ? 'hidden' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 12.79a9 9 0 01-8.22 8.5A7 7 0 1111 3a9 9 0 009 9.79z"
              />
            </svg>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            id="mobile-menu-toggle"
            className="text-gray-800 dark:text-white md:hidden"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white dark:bg-[rgb(11,15,25)] text-gray-800 dark:text-white py-4 px-6 space-y-4"
        >
          <a
            href="#Home"
            className="block hover:text-purple-500 dark:hover:text-purple-400 transition"
          >
            Home
          </a>
          <a
            href="https://www.nopiyar.my.id/p/riswan-nopiyar.html"
            target="_blank"
            className="block hover:text-purple-500 dark:hover:text-purple-400 transition"
          >
            About
          </a>
          <a
            href="#services"
            className="block hover:text-purple-500 dark:hover:text-purple-400 transition"
          >
            Services
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;