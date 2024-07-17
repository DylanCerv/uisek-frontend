import React from 'react';
import imgregister from '../../../../assets/chica-pensando.png';
import Formulario from './form';


const RegisterForm = () => {

    return (
        <div className='flex font-primary bg-gradient-to-r from-[#987806] via-[#e8b501] to-[#987806] justify-center pt-6 md:pt-24 md:pb-36 px-6'>
            <div className='flex flex-row bg-white rounded-2xl h-[755px] w-[1000px] rounded-la shadow-xl p-10'>

                <div className='md:w-1/2 md:border-l-2 border-white  md:my-10 px-16'>
                    <h1 className='text-5xl md:text-6xl text-black font-bold text-center my-5 mt-20'>!Hola de nuevo!</h1>
                    <Formulario />
                </div>

                <div className='flex flex-row relative md:w-1/2 mt-10 '>

                    <img src={imgregister} alt='Image' className="h-[500px] absolute transform bottom-0 l:translate-x-[6%] z-2 hidden md:block" />

                </div>
            </div>
        </div>
    );
};

export default RegisterForm;