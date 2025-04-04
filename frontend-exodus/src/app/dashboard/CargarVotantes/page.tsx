"use client";

import { useState } from "react";
import { saveVoter } from "@/Firebase/Handlers/VoterHandler";

const CargarVotantes = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    cedula: "",
    direccionResidencia: "",
    direccionVotacion: "",
    liderAsignado: "",
  });

  const [usuarios, setUsuarios] = useState<
    {
      nombre: string;
      apellido: string;
      edad: string;
      cedula: string;
      direccionResidencia: string;
      direccionVotacion: string;
      liderAsignado: string;
    }[]
  >([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await saveVoter(formData);
      setUsuarios([...usuarios, formData]);
    } catch (err: any) {
      console.error(
        "Error al registrar el votante. Intenta de nuevo.",
        err.message
      );
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Crear Votantes</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Apellido</label>
          <input
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Edad</label>
          <input
            type="number"
            name="edad"
            value={formData.edad}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Cédula</label>
          <input
            type="text"
            name="cedula"
            value={formData.cedula}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">
            Dirección Residencia
          </label>
          <input
            type="text"
            name="direccionResidencia"
            value={formData.direccionResidencia}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">
            Dirección Votación
          </label>
          <input
            type="text"
            name="direccionVotacion"
            value={formData.direccionVotacion}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Líder Asignado</label>
          <input
            type="text"
            name="liderAsignado"
            value={formData.liderAsignado}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Crear Usuario
        </button>
      </form>

      <h2 className="text-xl font-bold mt-6">Votantes cargados: </h2>
      <ul className="mt-4 space-y-2">
        {usuarios.map((usuario, index) => (
          <li key={index} className="border p-4 rounded-md">
            <p>
              <strong>Nombre:</strong> {usuario.nombre}
            </p>
            <p>
              <strong>Apellido:</strong> {usuario.apellido}
            </p>
            <p>
              <strong>Edad:</strong> {usuario.edad}
            </p>
            <p>
              <strong>Cédula:</strong> {usuario.cedula}
            </p>
            <p>
              <strong>Dirección Residencia:</strong>{" "}
              {usuario.direccionResidencia}
            </p>
            <p>
              <strong>Dirección Votación:</strong> {usuario.direccionVotacion}
            </p>
            <p>
              <strong>Líder Asignado:</strong> {usuario.liderAsignado}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CargarVotantes;
