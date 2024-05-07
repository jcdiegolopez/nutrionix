import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

export const Header = () => {
  return (
    <header className='w-full border-b '>
        <div className='wrapper flex items-center justify-between'>
            <Link href={`/`} className='w-12'>
                <Image src="/assets/images/logo.png" alt='Nutrionix logo' width={128} height={38} />
                
            </Link>
              <nav className='md:flex-between hidden w-full max-w-xs'>
                <NavItems/>
              </nav>
            <div className='flex w-32 justify-end gap-3'>
                <MobileNav/>
                <Button asChild className='rounded-full' size='lg'>
                  <Link href='/sign-in'>Log in</Link>
                </Button>
            </div>
        </div>
    </header>
  )
}
