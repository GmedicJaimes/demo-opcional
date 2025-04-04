import { db } from "../config";
import { collection, addDoc } from "firebase/firestore";

export const saveVoter = async (votante: {
  nombre: string;
  apellido: string;
  edad: string;
  cedula: string;
  direccionResidencia: string;
  direccionVotacion: string;
  liderAsignado: string;
}) => {
  try {
    const docRef = await addDoc(collection(db, "voters"), {
      ...votante,
      createdAt: new Date(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error al guardar el votante:", error);
    throw new Error("No se pudo registrar el votante");
  }
};
