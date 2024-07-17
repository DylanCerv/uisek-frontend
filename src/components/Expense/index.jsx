import React, { useState, useEffect } from 'react';
import ExpenseForm from './ExpenseForm/ExpenseForm';
import ExpenseList from './ExpenseList/ExpenseList';
import Popup from '../common/modal/popup';
import FiltersContainer from '../common/containers/FiltersContainer';
import { deleteExpenseAPI, getAllCategories, getAllExpenses, totalExpenseAPI } from '../../services/api';
import { useAuthContext } from '../../context/authContex';
import { useLocation } from 'react-router-dom';
import ButtonNavigate from '../common/navbar/ButtonNavigate';
import ExpensesPieChart from './ExpensesPieChart/ExpensesPieChart';



const sortOptions = [
  { name: 'Fecha Ascendente', href: '?sortBy=date&order=asc', current: false },
  { name: 'Fecha Descendente', href: '?sortBy=date&order=desc', current: false },
  { name: 'Monto Ascendente', href: '?sortBy=amount&order=asc', current: false },
  { name: 'Monto Descendente', href: '?sortBy=amount&order=desc', current: false },
]
const linkFilters = [
  { name: 'Gastos', href: '/dasboard/gestor-gatos' },
  { name: 'Categorias', href: '/dasboard/gestor-gatos/categoria' },
]


export default function ExpenseManager() {

    const { jwt } = useAuthContext();
    const location = useLocation();

    const [expenses, setExpenses] = useState([]);
    const [categories, setCategories] = useState([]);
    const [totalExpense, setTotalExpense] = useState({
      category: 0,
      month: 0,
      total: 0,
    });
    const [editingExpense, setEditingExpense] = useState(null);
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


    const addExpense = () => {
        setEditingExpense(null);
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
        const responseCategories = await getAllCategories(jwt);
        // Transformar los datos recibidos en el formato necesario para las opciones de filtros
        const formattedCategories = responseCategories.categories.map(category => ({
          value: category.id,
          label: category.name,
          checked: false,
        }));

        setCategories(formattedCategories);
      } catch (error) {
        console.error("Error fetching expenses", error);
      }
    };

    const fetchExpenses = async () => {
      try {
        const response = await getAllExpenses(jwt, appliedFilters);
        setExpenses(response.expenses);
      } catch (error) {
        console.error("Error fetching expenses", error);
      }
    };
  
    const saveExpense = async (expense) => {
      
    };
  
    const deleteExpense = async (id) => {
      try {
        const response = await deleteExpenseAPI(jwt, id)
        console.log(response)
        if (!response.error) {
          setExpenses(expenses.filter(e => e.id !== id));
        }
      } catch (error) {
        console.error("Error deleting expense", error);
      }
    };
  
    const editExpense = (expense) => {
      setEditingExpense(expense);
      openPopup();
    };

    const [formValues, setFormValues] = useState({
      date: '',
      categoryId: '',
    });
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    };
    const handleFetchValueTotal = async(e) => {
      e.preventDefault();
      try {
        const categoryParam = formValues.categoryId ? { category: formValues.categoryId } : null;
        const monthParam = formValues.date ? { month: formValues.date } : null;
    
        const requests = [totalExpenseAPI(jwt, {})]; // Siempre se hace esta llamada
        if (categoryParam) {
          requests.push(totalExpenseAPI(jwt, categoryParam));
        }
        if (monthParam) {
          requests.push(totalExpenseAPI(jwt, monthParam));
        }
        // Realizar las llamadas a la API en paralelo
        const [responseTotal, responseCategory, responseMonth] = await Promise.all(requests);

    
        setTotalExpense({
          category: responseCategory?.total || 0,
          month: responseMonth?.total || 0,
          total: responseTotal?.total || 0,
        });
    
        // console.log('Category Response:', responseCategory);
        // console.log('Month Response:', responseMonth);
        // console.log('Total Response:', responseTotal);
      } catch (error) {
        console.error('Error fetching total expenses:', error);
      }
    }

    // Función para aplicar filtros desde FiltersContainer
    const applyFilters = (filters) => {
      setAppliedFilters(filters);
    };


    useEffect(() => {
      applyUrlFilters();
    }, [location.search]);

    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        fetchExpenses();
    }, [appliedFilters]);

    return (
      <FiltersContainer
        title='Gestor de Gastos'
        onClickButton={addExpense}
        titleButton={'Crear Gasto'}

        filters={{
          sortOptions: sortOptions,
          linkFilters: linkFilters,
          searchInput: true,
          checkFilters: [
            {
              id: 'category',
              name: 'Categoria',
              options: categories,
            },
          ],
        }}

        applyFilters={applyFilters}
      >
        <Popup isOpen={isOpen} onClose={closePopup}>
          <ExpenseForm onSave={saveExpense} editingExpense={editingExpense} />
        </Popup>

        <div className='bg-cyan-800 shadow-lg p-4 rounded-md mb-10'>
          <div className='text-white mb-4'>
            <p>Total Mensual: <span>${totalExpense.month}</span></p>
            <p>Total Categoria: <span>${totalExpense.category}</span></p>
            <p>Total: <span>${totalExpense.total}</span></p>
          </div>

          <form
            onSubmit={handleFetchValueTotal}
            action=""
            className='flex flex-row gap-10'
          >
            <input
              type="date"
              name="date"
              placeholder="Date"
              className="border p-2 mb-2 w-full"
              value={formValues.date}
              onChange={handleInputChange}
            />
            <select
              name="categoryId"
              className="border p-2 mb-2 w-full"
              value={formValues.categoryId}
              onChange={handleInputChange}
            >
              <option value="">Seleccionar categoría</option>
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>

            <button type="submit" className='bg-slate-400 shadow-md px-10 py-2 rounded-full'>Obtener Valores</button>
          </form>
        </div>

        <ExpensesPieChart />

        <ExpenseList expenses={expenses} onEdit={editExpense} onDelete={deleteExpense} />
      </FiltersContainer>
    );
  }
