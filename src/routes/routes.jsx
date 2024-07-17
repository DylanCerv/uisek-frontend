import React from 'react'
import AuthContextProvider from '../context/authContex';
import {
    REGISTER,
    LOGIN,
    OUR,
    BRAND,
    CATEGORIES,
    CATEGORY,
    TERMINOS,
    PRIVACY,
    PRIVATE,
    CLIENT
} from './paths'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { PublicRoute } from './authRoutes/PublicRoutes'
import PrivateRoute from "./authRoutes/PrivateRoute";
import ClientRoute from './authRoutes/ClientRoute'
//
import Register from '../components/Auth/register';
import SignIn from '../components/Auth/login';
import Home from '../components/home';
import ExpenseManager from '../components/Expense';
import UserManager from '../components/UserManager';
import CategoryManager from '../components/CategoryManager';
import RoleManager from '../components/RoleManager';

const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicRoute />,
        children: [
            {
                index: true,
                element:<Home/>
            },
            // {
            //     path: REGISTER,
            //     element: <Register/>
            // },
            {
                path: LOGIN,
                element: <SignIn/>
            },
            {
                path: OUR,
                element: <h1 className='text-3xl min-h-[80vh]'> NOSOTROS</h1>
            },
            {
                path: BRAND,
                element: <h1 className='text-3xl min-h-[80vh]' >AGENDAR CITAS</h1>
            },
            {
                path: CATEGORIES,
                element: <h1 className='text-3xl min-h-[80vh]'>LABORATORIOS</h1>
            },
            {
                path: CATEGORY,
                element: <h1 className='text-3xl min-h-[80vh]'>CATEGORIA </h1>
            },
            {
                path: TERMINOS,
                element: <h1 className='text-3xl min-h-[80vh]'>TERMINOS </h1>
            },
            {
                path: PRIVACY,
                element: <h1 className='text-3xl min-h-[80vh]'>Politicas de privacidad </h1>
            },

        ]
    },

    {
        path: PRIVATE,
        element: <PrivateRoute />,
        children: [
            {
                path: 'gestor-gatos',
                element: <ExpenseManager />,
            },
            {
                path: 'gestor-gatos/categoria',
                element: <CategoryManager />
                
            },
            {
                path: 'gestor-usuario',
                element: <UserManager />
            },
            {
                path: 'gestor-usuario/roles',
                element: <RoleManager />
            },
        ]

    },

    {
        path: '*',
        element: <h1 className='text-3xl'>ERROR PAGINA NO ENCONTRADA</h1>
    }
])

export const Routes = () => (
    <>
        <AuthContextProvider >
            <RouterProvider router={router} />
        </AuthContextProvider>
    </>
)


