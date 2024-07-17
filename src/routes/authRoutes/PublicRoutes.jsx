import { Outlet, Navigate } from 'react-router-dom';
import { Nav } from '../../components/common/navbar/Nav';
import { Footer } from '../../components/common/footer/Footer';
import { useAuthContext } from '../../context/authContex';
import { PRIVATE, CLIENT } from '../paths';

import React from 'react'

export const PublicRoute = () => {
    const { isAuthenticated, role } = useAuthContext();

    if (isAuthenticated ) {

        return <Navigate to={PRIVATE} />;
    }

    else if (!isAuthenticated) {
        return (
            <>
                <Nav />
                <div>
                    <Outlet />
                </div>
                <Footer />

            </>
        )
    }
}








