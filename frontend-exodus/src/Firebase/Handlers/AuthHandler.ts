import { createUserWithEmailAndPassword, signInWithEmailAndPassword, deleteUser } from 'firebase/auth';
import { auth, db } from '../config';
import { doc, setDoc } from "firebase/firestore";

 //registrar usuario
 export const registerUser = async (
  email: string,
  password: string,
  additionalData: {
    name: string;
    lastName: string;
    age: number;
    idNumber: string;
    homeAddress: string;
    votingAddress: string;
    isLeader: boolean;
  }
) => {
  try {
    // autenticacion
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // valida la edad como numerico
    if (isNaN(additionalData.age)) {
      throw new Error("La edad debe ser un número válido.");
    }

    // crea usuarios en database
    const userRef = doc(db, "users", user.uid);
    await setDoc(userRef, {
      email,
      ...additionalData,
      createdAt: new Date(),
    });

    return user;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error en el registro:", error.message);
    } else {
      console.error("Error en el registro:", error);
    }
    
    // si hay un error al crear usuario en db, le elimina tambien la autenticacion asi luego no hay errores al vovler a intentarlo
    if (auth.currentUser) {
      await deleteUser(auth.currentUser).catch((err: unknown) => console.error("Error eliminando usuario:", err));
    }

    throw new Error((error instanceof Error ? error.message : "Error desconocido") || "Error al registrar el usuario.");
  }
};


// inicio de sesion
export const loginUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error('Error al iniciar sesión: ' + error.message);
    } else {
      throw new Error('Error al iniciar sesión: Error desconocido');
    }
  }
};
