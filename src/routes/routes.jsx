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
import Register from '../components/users/admin/register';
import SignIn from '../components/users/admin/login';
import Home from '../components/home';
import AdminDashBoard from '../components/users/admin/adminUser';
import Info from '../components/users/admin/info';
import HomeClient from '../components/users/client';
import DatosPersonalesClient from '../components/users/client/views/DatosPersonalesClient';
import HistorialMedicoClient from '../components/users/client/views/HistorialMedicoClient';
import DatosPersonales from '../components/users/admin/info/components/DatosPersonales';
import HistorialMedico from '../components/users/admin/info/components/HistorialMedico';
import AppointmentManagement from '../components/users/admin/appointmentManagement';
import Diagnostico from '../components/users/admin/info/components/Diagnostico';
import CartaConsentimiento from '../components/users/admin/info/components/CartaConsentimiento';
import TratamientoEndodoncia from '../components/users/admin/info/components/TratamientoEndodoncia';
import ArchivosClient from '../components/users/client/views/ArchivosClient';
import CartaConsentimientoClient from '../components/users/client/views/CartaConsentimientoClient';
import DiagnosticoClient from '../components/users/client/views/DiagnosticoClient';
import TratamientoEndodonciaClient from '../components/users/client/views/TratamientoEndodonciaClient';
import Archivos from '../components/users/admin/info/components/Archivos';
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
                element: <h1 className='text-3xl'> NOSOTROS</h1>
            },
            {
                path: BRAND,
                element: <h1 className='text-3xl' >AGENDAR CITAS</h1>
            },
            {
                path: CATEGORIES,
                element: <h1 className='text-3xl'>LABORATORIOS</h1>
            },
            {
                path: CATEGORY,
                element: <h1 className='text-3xl'>CATEGORIA </h1>
            },
            {
                path: TERMINOS,
                element: <h1 className='text-3xl'>TERMINOS </h1>
            },
            {
                path: PRIVACY,
                element: <h1 className='text-3xl'>Politicas de privacidad </h1>
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

            
            {
                path: ':id',
                element: <Info/>,
                children: [
                    {
                        path: 'archivos',
                        element: <Archivos/>
                    },
                    {
                        path: 'datos-personales',
                        element: <DatosPersonales />
                    },
                    {
                        path: 'historial-medico',
                        element: <HistorialMedico />
                    },
                    {
                        path: 'diagnostico-dental',
                        element: <Diagnostico />
                    },
                    {
                        path: 'carta-consentimiento',
                        element: <CartaConsentimiento />
                    },
                    {
                        path: 'tratamiento',
                        element: <TratamientoEndodoncia />
                    },
                ]
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


