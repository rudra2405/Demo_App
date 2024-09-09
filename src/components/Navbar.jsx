import React from 'react'
import logo from '../assets/logo.png'
import { navItems } from './index.jsx'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export const Navbar = () => {

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to the top
  };

  const handleClick = (href) => {
    setActiveLink(href);
    setMobileDrawerOpen(false);
  }

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  }

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0" onClick={scrollToTop}>
            <img className='h-10 w-10 mr-2' src={logo} alt="logo" />
            <span className="text-lg cursor-pointer">RudraH</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((items, index) => {
              return <li key={index}>
                <a href={`#${items.href}`} onClick={() => { handleClick(items.href) }} className={`${activeLink === items.href ? 'underline text-orange-500' : ''}`}
                >
                  {items.label}
                </a>
              </li>
            })}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className='py-2 px-3 border rounded-md'>
              sign in
            </a>
            <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>
              create an Account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X></X> : <Menu></Menu>}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (<div className="lg:hidden fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-content items-center">
          <ul>
            {navItems.map((items, index) => {
              return <li key={index} className="py-4">
                <a href={`#${items.href}`} onClick={() => { handleClick(items.href) }} className={`${activeLink == items.href ? 'underline text-orange-400' : ''}`}>
                  {items.label}
                </a>
              </li>
            })}
          </ul>
          <div className="flex space-x-6">
            <a href="#" className='py-2 px-3 border rounded-md'>
              sign in
            </a>
            <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>
              create an Account
            </a>
          </div>
        </div>)}
      </div>
    </nav>
  )
}
