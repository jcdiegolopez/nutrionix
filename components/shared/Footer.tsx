import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t'>
      <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row'>
        <Link href='/'>
          <Image src='/assets/images/logo.png' alt='Nutrionix logo' width={36} height={36} />
        </Link>
        <p>2024 Nutrionix. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer