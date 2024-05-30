import React from 'react'
import { menuRoutes } from '../../routes/menuRoutes'

const Header = () => {
  return (
    <nav className='flex flex-row bg-black'>
      <ul>
        {menuRoutes.map((item, key) => (
            <li key={key}>
              {item.icon}{item.path}
            </li>
          )
        )}
      </ul>
    </nav>
  )
}

export default Header