import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

/**
 * The `Footer` component in TypeScript React renders a footer section with a logo and copyright text
 * for Nutrionix.
 * @returns The `Footer` component is being returned, which consists of a footer element with a border
 * at the top. Inside the footer, there is a div element with specific classes for styling. Within the
 * div, there is an image wrapped in a Link component pointing to the homepage, and a paragraph element
 * displaying the copyright information "2024 Nutrionix. All Rights Reserved."
 */
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