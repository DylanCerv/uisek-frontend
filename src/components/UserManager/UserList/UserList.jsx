import React from "react";
import { useAuthContext } from "../../../context/authContex";
import { RoleEnum } from "../../../enum/roleEnum";

export default function UserList({ users, onEdit, onDelete }) {
  const { role } = useAuthContext();

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nombre
            </th>
            <th scope="col" className="px-6 py-3">
              Apellido
            </th>
            <th scope="col" className="px-6 py-3">
              Correo
            </th>
            <th scope="col" className="px-6 py-3">
              Rol
            </th>
            {role == RoleEnum.ADMIN &&
              <th scope="col" className="px-6 py-3">
                Acciones
              </th>
            }
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="bg-white border-b"
            >
              <td className="px-6 py-4">
                {user.name}
              </td>
              <td className="px-6 py-4">
                {user.lastname}
              </td>
              <td className="px-6 py-4">
                {user.email}
              </td>
              <td className="px-6 py-4">
                {user?.Role?.name}
              </td>
              {role == RoleEnum.ADMIN &&
                <td className="px-6 py-4 ">
                  <div className="flex gap-10">
                    <a
                      onClick={() => onEdit(user)}
                      href="#"
                      className="font-medium text-blue-600 hover:underline"
                    >Edit</a>
                    <a
                      onClick={() => onDelete(user.id)}
                      href="#"
                      className="font-medium text-red-600 hover:underline"
                    >Eliminar</a>
                  </div>
                </td>
              }
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
