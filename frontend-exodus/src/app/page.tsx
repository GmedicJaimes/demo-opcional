"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Cookies from "js-cookie";
// import { loginUser } from "../Firebase/Handlers/AuthHandler"; // Asegúrate de que la ruta esté correcta

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      //Verificamos credenciales
      if (email === "admin" && password === "admin123--") {
        //Guardamos token en localStorage
        const token = "mi-token-de-autenticacion";
        Cookies.set("authToken", token, { expires: 1 });
        //Redirigimos a la página de dashboard
        router.push("/dashboard");
        return;
      }

      // const user = await loginUser(email, password);
      // router.push("/dashboard");

      setError("Credenciales incorrectas. Intenta de nuevo.");
    } catch (err) {
      setError("Ocurrió un error. Intenta de nuevo.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputFocus = () => {
    setError(""); // Limpiar el error al enfocar el campo de entrada
  };
  return (
    <div className="min-h-screen  bg-[#d8f3dc] flex  items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-1/2 max-w-sm h-[600px] bg-[url('/login.jpg')] bg-cover rounded-l-lg"></div>
      <div className="w-1/2 max-w-xl h-[600px]  space-y-8 border-solid border-2 rounded-r-lg p-16 shadow-xl bg-white">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-black">
            Iniciar sesión
          </h2>
        </div>

        <div className="border border-emerald-700 p-4 text-center rounded-lg bg-[#d8f3dc] m-0">
          <p className="text-left text-sm font-ligh text-green-700">
            Para iniciar sesión, ingrese el usuario "admin" y la contraseña
            "admin123--"
          </p>
        </div>

        <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md -space-y-px">
            <div className="mb-4">
              <label
                htmlFor="usuario"
                className="text-black mb-2 text-sm font-semibold"
              >
                Usuario
              </label>

              <input
                id="usuario"
                name="usuario"
                type="text"
                autoComplete="usuario"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={handleInputFocus}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-400 bg-gray-100 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-emerald-700 focus:z-10 sm:text-sm"
                placeholder="Usuario"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-black mb-2 text-sm font-semibold"
              >
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={handleInputFocus}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-400 bg-gray-100 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-emerald-700 focus:z-10 sm:text-sm"
                placeholder="************"
              />
            </div>
          </div>

          {error && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className={`group relative mt-6  w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white text-bold cursor-pointer ${
                loading
                  ? "bg-emerald-700"
                  : "bg-emerald-600 hover:bg-emerald-700"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-700`}
            >
              {loading ? "Iniciando sesión..." : "Iniciar sesión"}
            </button>
          </div>

          <div className="text-sm text-center">
            <Link
              href="/forgot-password"
              className="font-medium text-emerald-700 hover:text-emerald-800"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
