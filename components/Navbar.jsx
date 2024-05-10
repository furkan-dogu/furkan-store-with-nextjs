"use client"

import Link from 'next/link'
import Image from 'next/image'
import Logo from "@/public/furkan-logo.png"
import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { usePathname } from 'next/navigation'
import { LuLogOut } from "react-icons/lu";
import useAuthCalls from '@/hooks/useAuthCalls'

const navigation = [
  {
    id: 1,
    title: "Home",
    path: "/dashboard"
  },
  {
    id: 2,
    title: "Products",
    path: "/dashboard/products"
  },
  {
    id: 3,
    title: "About",
    path: "/dashboard/about"
  }
]

const Navbar = () => {

  const { logout } = useAuthCalls()

  const [show, setShow] = useState(false)

  const pathname = usePathname()

  return (
    <nav className='bg-yellow-200 md:text-sm'>
      <div className='max-w-screen-xl mx-auto px-4 md:flex items-center gap-x-14 md:px-8'>
        <div className='flex justify-between items-center py-5 md:block'>
          <Link href="https://github.com/furkan-dogu" target='_blank'>
            <Image src={Logo} width={60} height={60} alt="Furkan" />
          </Link>
          <div className='md:hidden'>
            <button onClick={() => setShow(!show)} className='text-gray-500 hover:text-gray-800'>
              {show ? (<IoCloseSharp />) : (<GiHamburgerMenu />)}
            </button>
          </div>
        </div>

        <div className={`${
            show ? "flex flex-col pb-2" : "hidden"
          } flex-1 items-center md:flex md:flex-row`}>
          <ul className='space-y-6 md:flex md:space-x-6 md:space-y-0'>
            {navigation.map(({id, title, path}) => (
              <li key={id} className='text-gray-700 font-medium flex justify-center'>
                <Link href={path} className={`${pathname === path ? "active" : ""} block hover:bg-orange-500 px-4 py-2 rounded-full`}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        <div className='md:flex flex-1 gap-x-6 justify-end items-center mt-6 space-y-6 md:space-y-0 md:mt-0'>
          <Link href={"/"} onClick={logout} className='flex items-center justify-center gap-x-1 text-gray-700 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-full md:inline-flex font-medium'>
            Logout
            <LuLogOut />
          </Link>
        </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar