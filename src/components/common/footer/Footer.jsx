import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/logo.png'
import { Item } from './Item'
import { CONTACTO, CATEGORIAS, LEGAL } from './Menu'

export const Footer = () => {
    return (
        <footer className='bg-gray-200 text-primary/90 flex'>
            <div className='mx-10 grid grid-cols-1 md:grid-cols-4 gap-4 py-8'>
                <Link to='/'>
                    <div className='bg-whites h-full flex items-center'>
                        <img
                            src={Logo}
                            alt=""
                            className='w-auto h-[8vh] md:h-[20vh]'
                        />
                    </div>
                </Link>
                <Item Links={CONTACTO} title={'CONTACTO'} />
                <Item Links={CATEGORIAS} title={'TRAMITES'}/>
                <Item Links={LEGAL} title={'LEGAL'} />
            </div>
        </footer>
    )
}
