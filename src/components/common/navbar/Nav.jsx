import React, { useState } from 'react'
import logo from '../../../assets/logo.png'
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../../context/authContex';

export const Nav = () => {
    const { isAuthenticated, role, logout } = useAuthContext();

    const Routes = [
        { name: "NOSOTROS", route: "/our" },
        { name: "AGENDAR CITAS", route: "/agendar" },
        { name: "LABORATORIOS", route: "/lab" },
    ];

    const [open, setOpen] = useState(false)

    return (
        <div className='flex justify-between items-center w-full bg-white h-[12vh] overflow-hidden shadow mbs-8'>
            <div onClick={() => setOpen(!open)}
                className='absolute right-8 top-4 cursor-pointer md:hidden'>
                {open ? (<FiX size={40} color='white' />)
                    :
                    (<FiMenu size={40} color='white' />)}
            </div>

            <Link to={'/'}>
                <div className='flex h-[16vh] justify-center mx-4 py-2'>
                    <img src={logo} alt="" className='' />
                </div>
            </Link>

            <div className={`md:flex absolute md:static items-center text-xl 
                -z-10 md:z-0 transition-all duration-500 
                ${open ? 'top-[10vh]' : 'top-[-420px]'}`}>

                {isAuthenticated ? (
                    <button
                        onClick={() => logout()}
                        className='bg-secondary h-10 w-32 md:mx-4 mr-20 rounded-xl my-2 text-white font-semibold'>
                        Cerrar sesión
                    </button>
                ) : (
                    <div className='flex flex-col md:block'>
                        <Link to='/signin'>
                            <button className='bg-primary h-10 w-32 md:mx-4 rounded-xl my-2 text-white font-semibold'>
                                Iniciar sesión
                            </button>
                        </Link>
                        {/* <Link to='/signup'>
                            <button className='bg-secondary h-10 w-32 md:mx-4 mr-20 rounded-xl my-2 text-white font-semibold'>
                                Registrarme
                            </button>
                        </Link> */}
                    </div>
                )}
            </div>

        </div>
    )
}
