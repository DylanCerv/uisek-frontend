import React from "react";
import { useAuthContext } from "../../../context/authContex";
import { RoleEnum } from "../../../enum/roleEnum";

export default function ExpenseList({ expenses, onEdit, onDelete }) {
  const { role } = useAuthContext();


  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Descripcion
            </th>
            <th scope="col" className="px-6 py-3">
              Monto
            </th>
            <th scope="col" className="px-6 py-3">
              Fecha
            </th>
            {role == RoleEnum.ADMIN && (
              <th scope="col" className="px-6 py-3">
                Acciones
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id} className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {expense.description}
              </th>
              <td className="px-6 py-4">${expense.amount}</td>
              <td className="px-6 py-4">{formatDate(expense.date)}</td>
              {role == RoleEnum.ADMIN && (
                <td className="px-6 py-4 ">
                  <div className="flex gap-10">
                    <a
                      onClick={() =>
                        onEdit({ ...expense, date: formatDate(expense.date) })
                      }
                      href="#"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Edit
                    </a>
                    <a
                      onClick={() => onDelete(expense.id)}
                      href="#"
                      className="font-medium text-red-600 hover:underline"
                    >
                      Eliminar
                    </a>
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Función para formatear la fecha en el formato deseado (YYYY-MM-DD)
function formatDate(dateString) {
  const date = new Date(dateString);
  const formattedDate = `${date.getFullYear()}-${(
    "0" +
    (date.getMonth() + 1)
  ).slice(-2)}-${("0" + date.getDate()).slice(-2)}`;
  return formattedDate;
}
