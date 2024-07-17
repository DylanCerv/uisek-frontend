import React, { useEffect, useState } from "react";
import { createRole, updateRole } from "../../../services/api";
import { useAuthContext } from "../../../context/authContex";

export default function RoleForm({ onSave, editingRole }) {

  const { jwt } = useAuthContext();
  const [role, setRole] = useState({
    name: "",
    description: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRole({ ...role, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSave(role);

    try {
      if (editingRole) {
        const response = await updateRole(jwt, role, editingRole.id);
        console.log(response)
      } else {
        const response = await createRole(jwt, role);
        console.log(response)
      }

      setRole({ name: "", description: ""});
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    if (editingRole) {
      setRole(editingRole);
    } else {
      setRole({ name: "" });
    }
  }, [editingRole]);

  return (
    <div>
      <h2 className="text-lg font-semibold text-center mb-8">
        {editingRole ? "Editar Rol" : "Crear Rol"}
      </h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Nombre del rol"
          value={role.name}
          onChange={handleChange}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          name="description"
          placeholder="Descripcion"
          value={role.description}
          onChange={handleChange}
          className="border p-2 mb-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          {editingRole ? "Actualizar Rol" : "Agregar Rol"}
        </button>
      </form>
    </div>
  );
}
