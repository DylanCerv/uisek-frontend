import React, { useEffect, useState } from 'react'
import { createUser, getAllRoles, updateUser } from '../../../services/api';
import { useAuthContext } from '../../../context/authContex';

export default function UserForm({ onSave, editingUser }) {

    const { jwt } = useAuthContext();
    const [roles, setRoles] = useState([]);
    const [user, setUser] = useState({ name: '', lastname: '', email: '', password: '', roleId: '' });
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUser({ ...user, [name]: value });
    };


  const handleSubmit = async (e) => {
    e.preventDefault();
    onSave(user);

    try {
      if (editingUser) {
        const response = await updateUser(jwt, user, editingUser.id);
        console.log(response)
        setUser({ name: '', lastname: '', email: '', password: '', roleId: '' });
      } else {
        const response = await createUser(jwt, user);
        console.log(response)
        setUser({ name: '', lastname: '', email: '', password: '', roleId: '' });
      }

    } catch (error) {
      console.error(error);
    }
  };

  const fetchInitial = async () => {
    try {
      const response = await getAllRoles(jwt);
      setRoles(response.roles);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchInitial()
  }, []);

  useEffect(() => {
    if (editingUser) {
      setUser({ ...editingUser, password: '' });
    } else {
      setUser({ name: '', lastname: '', email: '', password: '', roleId: '' });
    }
  }, [editingUser]);

    return (
        <div>
            <h2 className="text-lg font-semibold text-center mb-8">
                {editingUser ? 'Editar Usuario' : 'Registrar Usuario'}
            </h2>
            <form onSubmit={handleSubmit} className="mb-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={user.name}
                    onChange={handleChange}
                    className="border p-2 mb-2 w-full"
                />
                <input
                    type="text"
                    name="lastname"
                    placeholder="Apellido"
                    value={user.lastname}
                    onChange={handleChange}
                    className="border p-2 mb-2 w-full"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Correo"
                    value={user.email}
                    onChange={handleChange}
                    className="border p-2 mb-2 w-full"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={user.password}
                    onChange={handleChange}
                    className="border p-2 mb-2 w-full"
                />

                <select
                  name="roleId"
                  value={user.roleId}
                  onChange={handleChange}
                  className="border p-2 mb-2 w-full"
                >
                  <option value="">Seleccionar categoría</option>
                  {roles.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.name}
                    </option>
                  ))}
                </select>
                
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    {editingUser ? 'Actualizar Usuario' : 'Agregar Usuario'}
                </button>
            </form>
        </div>
    );
}
