import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

function Header() {
    const Menu = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'Explore',
            path: '/'
        },
        {
            id: 3,
            name: 'Contact Us',
            path: '/'
        },
    ]
    return (
        <div className='flex items-center justify-between p-4 shadow-sm'>
            <div className='flex items-center gap-10'>
                <div className='flex gap-2 items-center'>
                    <Image src="/logo.svg" alt="logo" width={80} height={80} />
                    <h1 className='flex'>MedApp</h1>
                </div>
                <ul className='md:flex gap-8 hidden'>
                    {Menu.map((item, index) => (
                        <li className='hover:text-primary cursor-pointer'>{item.name}</li>
                    ))}
                </ul>
            </div>
            <Button>Get Started</Button>
        </div>
    )
}

export default Header
