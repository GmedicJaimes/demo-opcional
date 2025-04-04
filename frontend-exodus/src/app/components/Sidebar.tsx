"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Si prefieres usar iconos de alguna librería como react-icons
// import { FiHome, FiUsers, FiBox, FiBarChart2, FiSettings } from "react-icons/fi";

interface SidebarProps {
  darkMode: boolean;
  isOpen: boolean;
  activeSection:
    | "dashboard"
    | "usuarios"
    | "productos"
    | "reportes"
    | "configuracion";
  onSectionChange: (
    section:
      | "dashboard"
      | "usuarios"
      | "productos"
      | "reportes"
      | "configuracion"
  ) => void;
}

export default function Sidebar({
  darkMode,
  isOpen,
  activeSection,
  onSectionChange,
}: SidebarProps) {
  const pathname = usePathname();

  // Array de opciones del menú
  const menuItems: {
    id: "dashboard" | "usuarios" | "productos" | "reportes" | "configuracion";
    label: string;
    path: string;
  }[] = [
    {
      id: "dashboard",
      label: "Tablero de inicio",
      path: "/dashboard",
    },
    {
      id: "usuarios",
      label: "Votantes",
      path: "/dashboard/usuarios",
    },
    {
      id: "productos",
      label: "Crear Votante",
      path: "/dashboard/productos",
    },
    // {
    //   id: "reportes",
    //   label: "Reportes",
    //   path: "/dashboard/reportes",
    // },
    // {
    //   id: "configuracion",
    //   label: "Configuración",
    //   path: "/dashboard/configuracion",
    // },
  ];

  // Puedes usar enrutamiento por URL o mantener el enfoque basado en estado
  // Aquí muestro ambas opciones

  return (
    <div
      className={`fixed h-full ${isOpen ? "w-64" : "w-0 -ml-64"} ${
        darkMode ? "bg-gray-800" : "bg-white"
      } shadow-lg transition-all duration-300 ease-in-out z-10 overflow-y-auto`}
      style={{ marginTop: "4rem" }}
    >
      <div className="py-4">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              {/* Opción 1: Usando enrutamiento de Next.js */}
              {onSectionChange ? (
                // Si usamos cambio basado en estado (dentro de una sola página)
                <button
                  onClick={() => onSectionChange(item.id)}
                  className={`w-full text-left px-6 py-3 flex items-center ${
                    activeSection === item.id
                      ? darkMode
                        ? "bg-gray-700 text-white"
                        : "bg-gray-200 text-black"
                      : darkMode
                      ? "text-gray-300 hover:bg-gray-700"
                      : "text-gray-700 hover:bg-gray-100"
                  } transition-colors duration-200`}
                >
                  <span>{item.label}</span>
                </button>
              ) : (
                // Si usamos enrutamiento con páginas separadas
                <Link
                  href={item.path}
                  className={`block px-6 py-3 flex items-center ${
                    pathname === item.path
                      ? darkMode
                        ? "bg-gray-700 text-white"
                        : "bg-gray-200 text-black"
                      : darkMode
                      ? "text-gray-300 hover:bg-gray-700"
                      : "text-gray-700 hover:bg-gray-100"
                  } transition-colors duration-200`}
                >
                  <span>{item.label}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
