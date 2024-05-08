import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'
import { Poppins } from 'next/font/google'

const poppins = Poppins({weight: ["100","200","700"], subsets: ['latin']})

export const Header = () => {
  return (
    <header className='w-full border-b'>
        <div className='wrapper flex items-center justify-between'>
            <Link href={`/`} className='w-8 md:w-10 '>
                <div className='flex flex-row items-center flex-nowrap'>
                  <Image src="/assets/images/logo.png" alt='Nutrionix logo' width={128} height={38} />
                  <h3 className={`h3-bold`}>utrionix</h3>
                </div>
            </Link>
              <nav className='md:flex-between hidden w-full max-w-xs'>
                <NavItems/>
              </nav>
            <div className='flex justify-end gap-3 items-center'>
                <MobileNav/>
                <Button asChild className='rounded-full' size='lg'>
                  <Link href='/auth/signin'>Log in</Link>
                </Button>
            </div>
        </div>
    </header>
  )
}
