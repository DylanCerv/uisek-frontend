import { Outlet, useNavigate } from "react-router-dom";
import ButtonNavigate from "../../../common/navbar/ButtonNavigate";

function Info() {

    const navigate = useNavigate();
    const buttons = [
        { text: 'Gestor de usuarios', url: 'gestor-usuario' },
        { text: 'Datos Personales', url: 'datos-personales' },
        { text: 'Historial Medico', url: 'historial-medico' },
        { text: 'Diagnostico Dental', url: 'diagnostico-dental' },
        { text: 'Carta de Consentimiento', url: 'carta-consentimiento' },
        { text: 'Tratamiento', url: 'tratamiento' },
    ];

    return (
        <>
            <article className="flex flex-row gap-5">
                {buttons.map((button, index) => (
                    <ButtonNavigate
                        key={index}
                        onClick={() => navigate(destination)}
                        text={button.text}
                    />
                ))}
            </article>
            <Outlet />
        </>
    );
}

export default Info;
