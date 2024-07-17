
import UserTable from './UserTable';
import { getUserAll } from '../../../../services/api';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../../../../context/authContex';
import { Link, useNavigate } from 'react-router-dom';
import ButtonNavigate from '../../../common/navbar/ButtonNavigate';


const buttons = [
    { text: 'Gestor de Gatos', url: 'gestor-gatos' },
    { text: 'Gestor de Usuarios', url: 'gestor-usuario' },
];


function AdminDashBoard() {

    const [users, setUsers]=useState([]);
    const {jwt} = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        const getDataTable = async () => {
            try {
                const response= await getUserAll(jwt)
                setUsers(response)
            } catch (error) {
                console.log(error)
            }
        }
        getDataTable();
    },[])

    return (
        <div>
            <button>
                <Link
                    className='font-bold hover:text-cyan-600'
                    to="agendar-cita"
                >Gestionar Citas</Link>
            </button>
            <UserTable users={users} token={jwt} />

            <article className="flex flex-row gap-5">
                {buttons.map((button, index) => (
                    <ButtonNavigate
                        key={index}
                        onClick={() => navigate(destination)}
                        text={button.text}
                    />
                ))}
            </article>

            < Outlet />

        </div>
    );
}
export default AdminDashBoard;