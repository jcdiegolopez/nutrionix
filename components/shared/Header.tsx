import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'
import { Poppins } from 'next/font/google'
import { signOut, auth } from '@/auth'

const poppins = Poppins({weight: ["100","200","700"], subsets: ['latin']})

/**
 * The type `HeaderProps` in TypeScript React can have a property `type` that is either `'navbar'` or
 * `'hero'`.
 * @property {'navbar' | 'hero'} type - The `HeaderProps` type defines a TypeScript interface for the
 * properties that can be passed to a component called `Header`. The `type` property in `HeaderProps`
 * is optional and can have one of two specific string values: `'navbar'` or `'hero'`. This property is
 * used to
 */
type HeaderProps = {
  type?: 'navbar' | 'hero'
}

/* The code snippet `export const Header = async ({type = 'navbar'} : HeaderProps) => { const user =
await auth();` is defining a React functional component named `Header` that is marked as `async`. */
export const Header = async ({type = 'navbar'} : HeaderProps) => {
  const user = await auth();

  
  /* The `return` statement in the code snippet you provided is defining the JSX structure of a header
  component in a React application. Here's a breakdown of what it's doing: */
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
                {type == 'navbar' && <NavItems/>}
              </nav>
            <div className='flex justify-end gap-3 items-center'>
                {type == 'navbar' && <MobileNav/>}
                { type == 'navbar' && !user && (
                  <Button asChild className='rounded-full' size='lg'>
                    <Link href='/auth/signin'>Log in</Link>
                  </Button>
                  
                )}
            {user && <form
              action={async () => {
                'use server';
                await signOut();
              }}
            >
              <Button className='rounded-full' size='lg'>
                Sign Out
              </Button>
            </form>}
                
            </div>
        </div>
    </header>
  )
}