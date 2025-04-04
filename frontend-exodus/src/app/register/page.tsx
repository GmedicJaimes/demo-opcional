"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { registerUser } from "../../Firebase/Handlers/AuthHandler";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [votingAddress, setVotingAddress] = useState("");
  const [isLeader, setIsLeader] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await registerUser(email, password, {
        name,
        lastName,
        age: parseInt(age, 10),
        idNumber,
        homeAddress,
        votingAddress,
        isLeader,
      });

      router.push("/");
    } catch (err) {
      setError("Error al registrar usuario. Intenta de nuevo.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 border-solid border-2 rounded-lg p-6 shadow-xl bg-white">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Regístrate
          </h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md -space-y-px">
            <input
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="input-field"
            />
            <input
              type="text"
              placeholder="Apellido"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="input-field"
            />
            <input
              type="number"
              placeholder="Edad"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
              className="input-field"
            />
            <input
              type="text"
              placeholder="Cédula"
              value={idNumber}
              onChange={(e) => setIdNumber(e.target.value)}
              required
              className="input-field"
            />
            <input
              type="text"
              placeholder="Dirección de residencia"
              value={homeAddress}
              onChange={(e) => setHomeAddress(e.target.value)}
              required
              className="input-field"
            />
            <input
              type="text"
              placeholder="Dirección de votación"
              value={votingAddress}
              onChange={(e) => setVotingAddress(e.target.value)}
              required
              className="input-field"
            />
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={isLeader}
                onChange={(e) => setIsLeader(e.target.checked)}
              />
              <span>¿Es líder?</span>
            </label>
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-field"
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input-field"
            />
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <button type="submit" disabled={loading} className="btn">
            {loading ? "Registrando..." : "Registrar"}
          </button>

          <div className="text-sm text-center">
            <Link href="/" className="text-blue-600 hover:text-blue-500">
              ¿Ya tienes cuenta? Inicia sesión aquí
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
