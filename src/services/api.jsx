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















// OBTENER TODOS LOS USUARIOS (CLIENTES)
export const getUserAll = async (token) => {
  try {

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(`${API_BASE_URL}/clients/all`, config);
    return response.data;
  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    throw new Error(errorMessage);

  }
}

export const deleteUserById = async (token, id) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.delete(`${API_BASE_URL}/users/${id}`, config);
    return response.data;
  } catch (error) {
    console.log(error);
    const errorMessage = error.message;
    throw new Error(errorMessage);
  }
}

// OBTENER INFORMACION PERSONAL DE UN USUARIO
export const getUserInfoByID = async (token, id) => {
  try {

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(`${API_BASE_URL}/users/${id}/personal-information`, config);
    return response.data;
  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    throw new Error(errorMessage);

  }
}
// Update Informacion personal del usuario
export const putInfoPersonalUser = async (token, body, id ) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.put(`${API_BASE_URL}/users/${id}/personal-information`, body, config);
    return response.data;
  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    throw new Error(errorMessage);

  }
}
// OBTENER HISTORIAL MEDICO DE UN USUARIO
export const getHistorialMedicoUserByID = async (token, id) => {
  try {

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(`${API_BASE_URL}/users/${id}/historial-medico`, config);
    return response.data;
  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    throw new Error(errorMessage);

  }
}
// Update HISTORIAL MEDICO del usuario
export const putHistorialMedicoUser = async (token, body, id ) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.put(`${API_BASE_URL}/users/${id}/historial-medico`, body, config);
    return response.data;
  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    throw new Error(errorMessage);

  }
}


// Obtener archivos de un usuario
export const uploadFile = async (token, id, body) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(`${API_BASE_URL}/file/upload/${id}`, body, config);
    return response.data;
  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    throw new Error(errorMessage);

  }
}
// Obtener archivos de un usuario
export const getFile = async (token, id ) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(`${API_BASE_URL}/file/${id}`, config);
    return response.data;
  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    throw new Error(errorMessage);

  }
}

// Obtener un archivo de un usuario
export const getFileByCategory = async (token, user_id, category) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(`${API_BASE_URL}/file/by-category/${user_id}/${category}`);
    return response.data;
  } catch (error) {
    console.log(error);
    const errorMessage = error.message;
    throw new Error(errorMessage);
  }
};


// Obtener todas las agendas
export const getAgendaAll = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(`${API_BASE_URL}/agenda/all`, config);
    
    const formattedResponse = response.data.map(row => {
      const startDate = new Date(row.start);
      const endDate = new Date(row.end);

      return {
        ...row,
        start: startDate,
        end: endDate,
      };
    });

    return formattedResponse;
  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    throw new Error(errorMessage);
  }
}
// Obtener todas las agendas
export const getAgendaById = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/agenda/user/${userId}`);
    return response.data;
  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    throw new Error(errorMessage);
  }
}
// Crear una agenda
export const postAgenda = async (token, body) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(body);
    const response = await axios.post(`${API_BASE_URL}/agenda`, body, config);
    return response.data;
  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    throw new Error(errorMessage);

  }
}


// Obtener todas el diagnostico dental
export const getDiagnosticoDentalById = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/diagnostico-dental/byId/${userId}`);
    return response.data;
  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    throw new Error(errorMessage);
  }
}
// Actualizar toda el diagnostico dental
export const putDiagnosticoDentalById = async (token, body, userId) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.put(`${API_BASE_URL}/diagnostico-dental/byId/${userId}`, body, config);
    return response.data;
  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    throw new Error(errorMessage);
  }
}


// Obtener todas la carta de consentimiento
export const getCartaConsentimentoById = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/consentimiento/${userId}`);
    return response.data;
  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    throw new Error(errorMessage);
  }
}

// Actualizar la carta de consentimiento
export const putCartaConsentimentoById = async (token, body, userId) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.put(`${API_BASE_URL}/consentimiento/${userId}`, body, config);
    return response.data;
  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    throw new Error(errorMessage);
  }
}


// Obtener el tratamiento de endodoncia
export const getTratamientoEndodonciaById = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/tratamiento/endodoncia/${userId}`);
    return response.data;
  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    throw new Error(errorMessage);
  }
}
export const putTratamientoEndodonciaById = async (token, body, userId) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.put(`${API_BASE_URL}/tratamiento/endodoncia/${userId}`, body, config);
    return response.data;

  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    throw new Error(errorMessage);
  }
}
export const postElementTratamientoEndodoncia = async (token, body, userId, tratamientoId) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(`${API_BASE_URL}/tratamiento/endodoncia/element/${userId}/${tratamientoId}`, body, config);
    return response.data;

  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    throw new Error(errorMessage);
  }
}
export const deleteElementTratamientoEndodoncia = async (token, userId, element_id) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.delete(`${API_BASE_URL}/tratamiento/endodoncia/element/${userId}/${element_id}`, config);
    return response.data;
  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    throw new Error(errorMessage);
  }
}

