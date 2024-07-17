import axios from 'axios';

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const SECRET_KEY = import.meta.env.VITE_SECRET_KEY;

// REGISTROS DE USUARIOS

export const postRegister = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, userData);
    return response.data;
  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    throw new Error(errorMessage);
  }
};

// LOGIN
export const postLogin = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, {
      email: email,
      password: password,
    });
    return response.data;
  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    throw new Error(errorMessage);

  }
}

/**
 * Gastos
 */
export const getAllExpenses = async (token, filters = {}) => {
  try {
    const params = new URLSearchParams(filters).toString();
    const response = await axios.get(`${API_BASE_URL}/expenses?${params}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    throw new Error(errorMessage);

  }
}

export const createExpense = async (token, body) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/expenses`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    throw new Error(errorMessage);

  }
}

export const updateExpense = async (token, body, expenseId) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/expenses/${expenseId}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    throw new Error(errorMessage);

  }
}

export const deleteExpenseAPI = async (token, expenseId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/expenses/${expenseId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    throw new Error(errorMessage);

  }
}

export const totalExpenseAPI = async (token, filters={}) => {
  try {
    const params = new URLSearchParams(filters).toString();

    const response = await axios.get(`${API_BASE_URL}/expenses/total?${params}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    throw new Error(errorMessage);

  }
}

export const getTotalExpenseByCategoriesAPI = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/expenses/categories/total`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    throw new Error(errorMessage);

  }
}

/**
 * Categorias
 */
export const createCategory = async (token, body) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/categories`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    throw new Error(errorMessage);

  }
}

export const getAllCategories = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/categories`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    throw new Error(errorMessage);

  }
}

export const updateCategory = async (token, body, categoryId) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/categories/${categoryId}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    throw new Error(errorMessage);

  }
}

export const deleteCategoryAPI = async (token, categoryId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/categories/${categoryId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    throw new Error(errorMessage);

  }
}

/**
 * Users
 */
export const createUser = async (token, body) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    throw new Error(errorMessage);

  }
}

export const getAllUsers = async (token, filters = {}) => {
  try {
    const params = new URLSearchParams(filters).toString();
    const response = await axios.get(`${API_BASE_URL}/users?${params}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    throw new Error(errorMessage);

  }
}

export const updateUser = async (token, body, userId) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/users/${userId}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    throw new Error(errorMessage);

  }
}

export const deleteUserAPI = async (token, userId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    throw new Error(errorMessage);

  }
}

/**
 * Roles
 */
export const createRole = async (token, body) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/roles`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    throw new Error(errorMessage);

  }
}

export const getAllRoles = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/roles`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    throw new Error(errorMessage);

  }
}

export const updateRole = async (token, body, roleId) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/roles/${roleId}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    throw new Error(errorMessage);

  }
}

export const deleteRoleAPI = async (token, roleId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/roles/${roleId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    throw new Error(errorMessage);

  }
}
