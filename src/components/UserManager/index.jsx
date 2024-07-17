import React, { useState, useEffect } from 'react';
import UserForm from './UserForm/UserForm';
import UserList from './UserList/UserList';
import Popup from '../common/modal/popup';
import FiltersContainer from '../common/containers/FiltersContainer';
import { deleteUserAPI, getAllRoles, getAllUsers } from '../../services/api';
import { useAuthContext } from '../../context/authContex';
import { useLocation } from 'react-router-dom';



const linkFilters = [
  { name: 'Usuarios', href: '/dasboard/gestor-usuario' },
  { name: 'Roles', href: '/dasboard/gestor-usuario/roles' },
]


export default function UserManager() {


    const { jwt } = useAuthContext();
    const location = useLocation();
    const [roles, setRoles] = useState([]);
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingExpense] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [appliedFilters, setAppliedFilters] = useState({
      category: "",
      startDate: "",
      endDate: "",
      sortBy: "",
      order: "",
    });

    // Función para obtener los parámetros de la URL y aplicarlos como filtros
    const applyUrlFilters = () => {
      const params = new URLSearchParams(location.search);
      const category = params.get('category') || '';
      const startDate = params.get('startDate') || '';
      const endDate = params.get('endDate') || '';
      const sortBy = params.get('sortBy') || '';
      const order = params.get('order') || '';
      setAppliedFilters({
        category,
        startDate,
        endDate,
        sortBy,
        order,
      });
    };

    const addUser = () => {
        setEditingExpense(null);
        openPopup();
    }
    const openPopup = () => {
      setIsOpen(true);
    };
    const closePopup = () => {
      setIsOpen(false);
    };

    const fetchRoles = async () => {
      try {
        const responseRoles = await getAllRoles(jwt);
        // Transformar los datos recibidos en el formato necesario para las opciones de filtros
        const formattedRoles = responseRoles.roles.map(role => ({
          value: role.id,
          label: role.name,
          checked: false,
        }));

        setRoles(formattedRoles);
      } catch (error) {
        console.error("Error fetching users", error);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await getAllUsers(jwt, appliedFilters);
        console.log(response)
        setUsers(response.users);
      } catch (error) {
        console.error("Error fetching users", error);
      }
    };
  
    const saveUser = async (expense) => {
      
    };
  
    const deleteUser = async (id) => {
      try {
        const response = await deleteUserAPI(jwt, id)
        console.log(response)
        if (!response.error) {
          setUsers(users.filter(e => e.id !== id));
        }
      } catch (error) {
        console.error("Error deleting expense", error);
      }
    };
  
    const editUser = (user) => {
      setEditingExpense(user);
      openPopup();
    };

    // Función para aplicar filtros desde FiltersContainer
    const applyFilters = (filters) => {
      setAppliedFilters(filters);
    };
    
    useEffect(() => {
      applyUrlFilters();
    }, [location.search]);

    useEffect(() => {
      fetchRoles();
    }, []);

    useEffect(() => {
      fetchUsers();
    }, [appliedFilters]);
  
    return (
        <FiltersContainer
            title='Gestor de Usuarios'
            onClickButton={addUser}
            titleButton={'Crear Usuario'}

            filters={{
              linkFilters: linkFilters,
              searchInput: true,
              checkFilters: [
                {
                  id: 'category',
                  name: 'Roles',
                  options: roles,
                },
              ],
            }}

            applyFilters={applyFilters}
        >
            <Popup isOpen={isOpen} onClose={closePopup}>
                <UserForm onSave={saveUser} editingUser={editingUser} />
            </Popup>
            <UserList users={users} onEdit={editUser} onDelete={deleteUser} />
        </FiltersContainer>
    );
}









