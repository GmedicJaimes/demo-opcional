"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Dashboard from "./tablero-inicio/page";
import Usuarios from "./usuarios/page";
import Productos from "./cargar-votantes/page";

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState<
    "dashboard" | "usuarios" | "productos" | "reportes" | "configuracion"
  >("dashboard");

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
    setUsername("User Name");
    setLoading(false);
  }, [router]);

  const handleLogout = () => {
    router.push("/");
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Función para cambiar de sección
  const handleSectionChange = (
    section:
      | "dashboard"
      | "usuarios"
      | "productos"
      | "reportes"
      | "configuracion"
  ) => {
    setActiveSection(section);
  };

  // Renderizar el contenido según la sección activa
  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />;
      case "usuarios":
        return <Usuarios />;
      case "productos":
        return <Productos />;
      // case "reportes":
      //   return <Reportes />;
      // case "configuracion":
      //   return <Configuracion />;
      default:
        return <Dashboard />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Cargando...</p>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Navbar como componente separado */}
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        toggleSidebar={toggleSidebar}
        username={username}
        handleLogout={handleLogout}
      />

      {/* Layout con Sidebar y Contenido */}
      <div
        className={`fixed inset-0 z-0 flex ${
          darkMode ? "bg-gray-900" : "bg-white"
        }`}
      >
        {/* Sidebar como componente separado */}
        <Sidebar
          darkMode={darkMode}
          isOpen={sidebarOpen}
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
        />

        {/* Contenido principal */}
        <div
          className={`flex-1 overflow-auto ${
            darkMode ? "bg-gray-900" : "bg-gray-100"
          } transition-all duration-300 ease-in-out`}
          style={{ marginLeft: sidebarOpen ? "16rem" : "0", marginTop: "4rem" }}
        >
          <main className="p-6">
            <div
              className={`${
                darkMode ? "bg-gray-800" : "bg-white"
              } rounded-lg shadow p-6`}
            >
              {renderContent()}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
