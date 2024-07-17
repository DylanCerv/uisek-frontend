import React from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/authContex';
import { Nav } from '../../components/common/navbar/Nav';
import { Footer } from '../../components/common/footer/Footer';
import ButtonNavigate from '../../components/common/navbar/ButtonNavigate';


const buttons = [
    { text: 'Gestor de Gatos', url: 'gestor-gatos' },
    { text: 'Gestor de Usuarios', url: 'gestor-usuario' },
];


export default function PrivateRoute() {
    const { isAuthenticated, role } = useAuthContext();
    const navigate = useNavigate();


    if (isAuthenticated ) {
        return (
            <>
                <Nav />
                <div className='relativse min-h-[800px] px-10 py-6'>
                    <article className="flex flex-row gap-5">
                        {buttons.map((button, index) => (
                            <ButtonNavigate
                                key={index}
                                onClick={() => navigate(button.url)}
                                text={button.text}
                            />
                        ))}
                    </article>

                    < Outlet />
                </div>
                <Footer />
            </>
        );
    } else {
        return <Navigate to='/' />;
    }

}
