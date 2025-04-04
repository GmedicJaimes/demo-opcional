// "use client";

// import React, { useState } from "react";
// import * as XLSX from "xlsx";

// const UsuariosPage = () => {
//   const [users, setUsers] = useState<any[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const usersPerPage = 50;

//   // Función para manejar la carga del archivo Excel
//   const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         const data = e.target?.result;
//         const workbook = XLSX.read(data, { type: "binary" });
//         const sheetName = workbook.SheetNames[0]; // Leer la primera hoja
//         const sheet = workbook.Sheets[sheetName];
//         const jsonData = XLSX.utils.sheet_to_json(sheet); // Convertir a JSON
//         setUsers(jsonData); // Actualizar el estado con los datos
//       };
//       reader.readAsBinaryString(file);
//     }
//   };

//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   return (
//     <div className="">
//       <h1 className="text-2xl font-bold mb-4">Listado de votantes</h1>

//       {/* Botón para cargar archivo Excel */}
//       <div className="mb-4">
//         <label
//           htmlFor="file-upload"
//           className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Importar Excel
//         </label>
//         <input
//           id="file-upload"
//           type="file"
//           accept=".xlsx, .xls"
//           className="hidden"
//           onChange={handleFileUpload}
//         />
//       </div>

//       {/* Tabla de usuarios */}
//       <div className="overflow-x-auto">
//         <table className="table-auto w-full border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               {users.length > 0 &&
//                 Object.keys(users[0]).map((key) => (
//                   <th
//                     key={key}
//                     className="border border-gray-300 px-4 py-2 text-left"
//                   >
//                     {key}
//                   </th>
//                 ))}
//             </tr>
//           </thead>
//           <tbody>
//             {currentUsers.map((user, index) => (
//               <tr key={index} className="hover:bg-gray-100">
//                 {Object.values(user).map((value, i) => (
//                   <td
//                     key={i}
//                     className="border border-gray-300 px-4 py-2 text-left"
//                   >
//                     {String(value)}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Paginación */}
//       <div className="mt-4 flex justify-center">
//         <button
//           className="px-4 py-2 bg-gray-300 rounded-l hover:bg-gray-400"
//           onClick={() => paginate(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
//           Anterior
//         </button>
//         <button
//           className="px-4 py-2 bg-gray-300 rounded-r hover:bg-gray-400"
//           onClick={() => paginate(currentPage + 1)}
//           disabled={indexOfLastUser >= users.length}
//         >
//           Siguiente
//         </button>
//       </div>
//     </div>
//   );
// };

// export default UsuariosPage;

"use client";

import React, { useState } from "react";
import * as XLSX from "xlsx";

interface User {
  [key: string]: string | number; // Si no conoces las claves exactas
}

const UsuariosPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 50;

  // Función para manejar la carga del archivo Excel
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target?.result;
        const workbook = XLSX.read(data, { type: "binary" });
        const sheetName = workbook.SheetNames[0]; // Leer la primera hoja
        const sheet = workbook.Sheets[sheetName];
        const jsonData: User[] = XLSX.utils.sheet_to_json(sheet); // Convertir a JSON
        setUsers(jsonData); // Actualizar el estado con los datos
      };
      reader.readAsBinaryString(file);
    }
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-4">Listado de votantes</h1>

      {/* Botón para cargar archivo Excel */}
      <div className="mb-4">
        <label
          htmlFor="file-upload"
          className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Importar Excel
        </label>
        <input
          id="file-upload"
          type="file"
          accept=".xlsx, .xls"
          className="hidden"
          onChange={handleFileUpload}
        />
      </div>

      {/* Tabla de usuarios */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              {users.length > 0 &&
                Object.keys(users[0]).map((key) => (
                  <th
                    key={key}
                    className="border border-gray-300 px-4 py-2 text-left"
                  >
                    {key}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, index) => (
              <tr key={index} className="hover:bg-gray-100">
                {Object.values(user).map((value, i) => (
                  <td
                    key={i}
                    className="border border-gray-300 px-4 py-2 text-left"
                  >
                    {String(value)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paginación */}
      <div className="mt-4 flex justify-center">
        <button
          className="px-4 py-2 bg-gray-300 rounded-l hover:bg-gray-400"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <button
          className="px-4 py-2 bg-gray-300 rounded-r hover:bg-gray-400"
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastUser >= users.length}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default UsuariosPage;
