import React from 'react'
import { Link } from 'react-router-dom'

export default function LinkFiltersList({subCategories}) {
  return (
    <>
        <h3 className="sr-only">Categories</h3>
        <ul role="list" className="px-2 py-3 font-medium text-gray-900 lg:space-y-4 lg:border-b lg:border-gray-200 lg:pb-6 lg:text-sm">
            {subCategories.map((category) => (
                <li key={category.name}>
                    <Link
                        to={category.href}
                        className="block px-2 py-3 lg:px-0 lg:py-0"
                    >
                        {category.name}
                    </Link>
                </li>
            ))}
        </ul>
    </>
  )
}
