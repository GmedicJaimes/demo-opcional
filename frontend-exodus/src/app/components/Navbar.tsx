"use client";
import React from "react";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  toggleSidebar: () => void;
  username: string;
  handleLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  toggleDarkMode,
  toggleSidebar,
  // username,
  handleLogout,
}) => {
  return (
    <nav
      className={`${
        darkMode ? "bg-gray-800" : "bg-white"
      } shadow fixed w-full z-10`}
    >
      <div className="max-w-full px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="mr-4 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
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
            <h1 className="text-xl font-bold">Exodus</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              }`}
            >
              {darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>
            {/* <span className="mr-2"></span> */}
            {/* <div className="relative flex items-center group">
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 invisible group-hover:visible">
                <a
                  href="#perfil"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Perfil
                </a>
                <a
                  href="#config"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Configuración
                </a>
                <button
                  onClick={handleLogout}
                  className="w-full text-left block px-4 py-2 text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                    Cerrar sesión
                  </div>
                </button>
              </div>
            </div> */}

            <div className="relative flex items-center group">
              {/* Ícono del usuario */}
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>

              {/* Menú desplegable */}
              <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                <a
                  href="#perfil"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Perfil
                </a>
                <a
                  href="#config"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Configuración
                </a>
                <button
                  onClick={handleLogout}
                  className="w-full text-left block px-4 py-2 text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="flex items-center cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                    Cerrar sesión
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
