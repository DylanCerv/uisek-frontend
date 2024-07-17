import React from 'react'
import { BsFacebook, BsInstagram } from 'react-icons/Bs'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export const Item = ({ Links, title }) => {
  return (
    <div className='mb-8'>
      <h1 className='my-5 font-bold ' >{title}</h1>
      <ul>
        {
          Links.map((link) => (
            <li key={link.name} className='font font-thin'>
              {link.name === 'social' ?
                <div className='flex gap-4 items-center mt-8'>
                  {
                    link.links.map((Socialink) => {
                      switch (Socialink.name) {
                        case "Facebook":
                          return (
                            <a
                              key={Socialink.name}
                              href={Socialink.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <BsFacebook size={26} />
                            </a>
                          );
                        case "Twitter":
                          return (
                            <a
                              key={Socialink.name}
                              href={Socialink.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <AiFillTwitterCircle size={30} />
                            </a>
                          );
                        case "Instagram":
                          return (
                            <a
                              key={Socialink.name}
                              href={Socialink.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <BsInstagram size={26} />
                            </a>
                          );
                        default:
                          return null;
                      }
                    }

                    )
                  }
                </div>
                :

                <div className='cursor pointer'>
                  <Link to={link.link}>
                    {link.name}
                  </Link>
                </div>}

            </li>
          ))
        }
      </ul>
    </div>
  )
}
