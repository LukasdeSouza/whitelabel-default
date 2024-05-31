import Image from 'next/image'
import React from 'react'
import moonIcon from '../../../assets/moonIcon.svg'

const ButtonChangeTheme = () => {
  return (
    <button className='p-4 border-2 border-gray-400'>
      <Image src={moonIcon} alt='moon-icon'/>
    </button>
  )
}

export default ButtonChangeTheme