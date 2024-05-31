import React from 'react'
import { menuRoutes } from '../../routes/menuRoutes'
import Link from 'next/link'

const Header = () => {
  return (
    <nav className='w-full flex flex-row items-center p-4'>
      <Link 
        href={menuRoutes[0].path} 
        className='text-primaryDark font-semibold'
        >
          Logo
        </Link>
      <ul className='w-full flex justify-end gap-6'>
        {menuRoutes.map((item, key) => (
          <Link
            key={key}
            href={item.path}
            className='text-sm text-mediumDark cursor-pointer hover:text-primaryDark'
            >
              {item.icon}{item.menuName}
          </Link>
          )
        )}
      </ul>
    </nav>
  )
}

export default Header