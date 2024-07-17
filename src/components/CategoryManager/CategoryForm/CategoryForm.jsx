import React, { useEffect, useState } from "react";
import { createCategory, updateCategory } from "../../../services/api";
import { useAuthContext } from "../../../context/authContex";

export default function CategoryForm({ onSave, editingCategory }) {

  const { jwt } = useAuthContext();
  const [category, setCategory] = useState({
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSave(category);

    try {
      if (editingCategory) {
        const response = await updateCategory(jwt, category, editingCategory.id);
        console.log(response)
      } else {
        const response = await createCategory(jwt, category);
        console.log(response)
      }

      setCategory({ name: "" });
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    if (editingCategory) {
      setCategory(editingCategory);
    } else {
      setCategory({ name: "" });
    }
  }, [editingCategory]);

  return (
    <div>
      <h2 className="text-lg font-semibold text-center mb-8">
        {editingCategory ? "Editar Categoria" : "Crear Categoria"}
      </h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Nombre de la categoria"
          value={category.name}
          onChange={handleChange}
          className="border p-2 mb-2 w-full"
        />

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          {editingCategory ? "Actualizar Categoria" : "Agregar Categoria"}
        </button>
      </form>
    </div>
  );
}
