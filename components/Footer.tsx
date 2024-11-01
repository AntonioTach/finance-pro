import { deviceType } from '@/lib/utils'
import { FooterProps } from '@/types'
import React from 'react'

const Footer = ({user, type = deviceType.DESKTOP}: FooterProps) => {
  return (
    <footer className='footer'>
     <div className='footer_name'>
      <p className='text-xl font-bold text-gray-700'>
       {user.lastName[0]}
      </p>
     </div>
    </footer>
  )
}

export default Footer
