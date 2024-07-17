import React, { useState, useEffect } from 'react';
import Popup from '../common/modal/popup';
import FiltersContainer from '../common/containers/FiltersContainer';
import { deleteRoleAPI, getAllRoles } from '../../services/api';
import { useAuthContext } from '../../context/authContex';
import { useLocation } from 'react-router-dom';
import RoleList from './RoleList/RoleList';
import RoleForm from './RoleForm/RoleForm';


const linkFilters = [
    { name: 'Usuarios', href: '/dasboard/gestor-usuario' },
    { name: 'Roles', href: '/dasboard/gestor-usuario/roles' },
]

export default function RoleManager() {

    const { jwt } = useAuthContext();
    const location = useLocation();
    const [roles, setRoles] = useState([]);
    const [editingRoles, setEditingRoles] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [appliedFilters, setAppliedFilters] = useState({
      startDate: "",
      endDate: "",
      sortBy: "",
      order: "",
    });

    // Función para obtener los parámetros de la URL y aplicarlos como filtros
    const applyUrlFilters = () => {
      const params = new URLSearchParams(location.search);
      const startDate = params.get('startDate') || '';
      const endDate = params.get('endDate') || '';
      const sortBy = params.get('sortBy') || '';
      const order = params.get('order') || '';
      setAppliedFilters({
        startDate,
        endDate,
        sortBy,
        order,
      });
    };




    const addRoles = () => {
        setEditingRoles(null);
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
        const response = await getAllRoles(jwt, appliedFilters);
        setRoles(response.roles);
      } catch (error) {
        console.error("Error fetching Roles", error);
      }
    };

    const saveRoles = async (Roles) => {
      
    };
  
    const deleteRoles = async (id) => {
      try {
        const response = await deleteRoleAPI(jwt, id)
        console.log(response)
        if (!response.error) {
          setRoles(roles.filter(e => e.id !== id));
        }
      } catch (error) {
        console.error("Error deleting Roles", error);
      }
    };
  
    const editRoles = (Roles) => {
      setEditingRoles(Roles);
      openPopup();
    };


    // Función para aplicar filtros desde FiltersContainer
    const applyFilters = (filters) => {
      setAppliedFilters(filters);
    };

    useEffect(() => {
      applyUrlFilters();
      fetchRoles();
    }, [location]); // Escucha cambios en los filtros aplicados


    return (
      <FiltersContainer
        title='Gestor de Usuarios (roles)'
        onClickButton={addRoles}
        titleButton={'Crear Rol'}

        filters={{
          linkFilters: linkFilters,
          searchInput: true,
        }}

      >
        <Popup isOpen={isOpen} onClose={closePopup}>
          <RoleForm onSave={saveRoles} editingRole={editingRoles} />
        </Popup>
        <RoleList roles={roles} onEdit={editRoles} onDelete={deleteRoles} />
      </FiltersContainer>
    );
  }
