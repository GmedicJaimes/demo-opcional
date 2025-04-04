"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Example data
  const totalUsers = 150;
  const totalVoters = 1254;

  const barData = {
    labels: ["Usuarios Registrados", "Votantes Registrados"],
    datasets: [
      {
        label: "Cantidad",
        data: [totalUsers, totalVoters],
        backgroundColor: ["#4CAF50", "#2196F3"],
      },
    ],
  };

  const pieData = {
    labels: ["Usuarios Registrados", "Votantes Registrados"],
    datasets: [
      {
        data: [totalUsers, totalVoters],
        backgroundColor: ["#f9668b", "#f5f966"],
      },
    ],
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard de Inicio</h1>
      <div className="flex align-items justify-center gap-4 mt-4">
        <p className="border-2 border-indigo-500 rounded-lg h-24 shadow-sm bg-indigo-100 p-4 flex flex-col items-center justify-center">
          <span className="">Usuarios Registrados</span>
          <span className="text-2xl font-bold text-indigo-900">
            {totalUsers}
          </span>
        </p>
        <p className="border-2 border-indigo-500 rounded-lg h-24 shadow-sm bg-indigo-100 p-4 flex flex-col items-center justify-center">
          <span className="">Votantes Registrados</span>
          <span className="text-2xl font-bold text-indigo-900">
            {totalVoters}
          </span>
        </p>
      </div>
      <div className="flex justify-between mt-4 gap-8">
        <div
          style={{ width: "60%" }}
          className="shadow-2xl  p-4 rounded-lg border-2 border-gray-300"
        >
          <h3>Gráfico de Barras</h3>
          <Bar data={barData} />
        </div>
        <div
          style={{ width: "40%" }}
          className="shadow-2xl  p-4 rounded-lg border-2 border-gray-300"
        >
          <h3>Gráfico de Torta</h3>
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
