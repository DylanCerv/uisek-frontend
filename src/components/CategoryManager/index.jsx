import React, { useState, useEffect } from 'react';
import CategoryForm from './CategoryForm/CategoryForm';
import CategoryList from './CategoryList/CategoryList';
import Popup from '../common/modal/popup';
import FiltersContainer from '../common/containers/FiltersContainer';
import { deleteCategoryAPI, getAllCategories } from '../../services/api';
import { useAuthContext } from '../../context/authContex';
import { useLocation } from 'react-router-dom';



const linkFilters = [
  { name: 'Gastos', href: '/dasboard/gestor-gatos' },
  { name: 'Categorias', href: '/dasboard/gestor-gatos/categoria' },
]


export default function CategoryManager() {

    const { jwt } = useAuthContext();
    const location = useLocation();
    const [categories, setCategories] = useState([]);
    const [editingCategories, setEditingCategories] = useState(null);
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




    const addCategories = () => {
        setEditingCategories(null);
        openPopup();
    }

    const openPopup = () => {
      setIsOpen(true);
    };
    const closePopup = () => {
      setIsOpen(false);
    };
  
    const fetchCategories = async () => {
      try {
        const responseCategories = await getAllCategories(jwt, appliedFilters);

        setCategories(responseCategories.categories);
      } catch (error) {
        console.error("Error fetching Categoriess", error);
      }
    };

    const saveCategories = async (Categories) => {
      
    };
  
    const deleteCategories = async (id) => {
      try {
        const response = await deleteCategoryAPI(jwt, id)
        console.log(response)
        if (!response.error) {
          setCategories(categories.filter(e => e.id !== id));
        }
      } catch (error) {
        console.error("Error deleting Categories", error);
      }
    };
  
    const editCategories = (categories) => {
      setEditingCategories(categories);
      openPopup();
    };


    // Función para aplicar filtros desde FiltersContainer
    const applyFilters = (filters) => {
      setAppliedFilters(filters);
    };

    useEffect(() => {
      applyUrlFilters();
      fetchCategories();
    }, [location]); // Escucha cambios en los filtros aplicados


    return (
      <FiltersContainer
        title='Gestor de Gastos (categorias)'
        onClickButton={addCategories}
        titleButton={'Crear Categoria'}

        filters={{
          linkFilters: linkFilters,
          searchInput: true,
        }}

      >
        <Popup isOpen={isOpen} onClose={closePopup}>
          <CategoryForm onSave={saveCategories} editingCategory={editingCategories} />
        </Popup>
        <CategoryList categories={categories} onEdit={editCategories} onDelete={deleteCategories} />
      </FiltersContainer>
    );
  }
