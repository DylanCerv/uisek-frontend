import React, { useEffect, useState } from "react";
import { createExpense, getAllCategories, updateExpense } from "../../../services/api";
import { useAuthContext } from "../../../context/authContex";

export default function ExpenseForm({ onSave, editingExpense }) {

  const { jwt } = useAuthContext();

  const [categories, setCategories] = useState([]);
  const [expense, setExpense] = useState({
    description: "",
    amount: "",
    date: "",
    categoryId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense({ ...expense, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSave(expense);

    try {
      if (editingExpense) {
        const response = await updateExpense(jwt, expense, editingExpense.id);
        console.log(response)
      } else {
        const response = await createExpense(jwt, expense);
        console.log(response)
      }

      setExpense({ description: "", amount: "", date: "" });
    } catch (error) {
      console.error(error);
    }
  };

  const fetchInitial = async () => {
    try {
      const response = await getAllCategories(jwt);
      setCategories(response.categories);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchInitial()
  }, []);

  useEffect(() => {
    if (editingExpense) {
      setExpense(editingExpense);
    } else {
      setExpense({ description: "", amount: "", date: "" });
    }
  }, [editingExpense]);


  return (
    <div>
      <h2 className="text-lg font-semibold text-center mb-8">
        {editingExpense ? "Editar Gasto" : "Crear Gasto"}
      </h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={expense.description}
          onChange={handleChange}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={expense.amount}
          onChange={handleChange}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="date"
          name="date"
          placeholder="Date"
          value={expense.date}
          onChange={handleChange}
          className="border p-2 mb-2 w-full"
        />

        <select
          name="categoryId"
          value={expense.categoryId}
          onChange={handleChange}
          className="border p-2 mb-2 w-full"
        >
          <option value="">Seleccionar categoría</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          {editingExpense ? "Actualizar Gasto" : "Agregar Gasto"}
        </button>
      </form>
    </div>
  );
}
