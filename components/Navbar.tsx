import React from 'react'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <a className="text-xl font-bold">Anjani Function Hall</a>
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex space-x-4">
                <Link href="/">
                  <a className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                </Link>
                <Link href="/function-hall">
                  <a className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Function Hall</a>
                </Link>
                <Link href="/dining-hall">
                  <a className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Dining Hall</a>
                </Link>
                <Link href="/catering">
                  <a className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Catering Facility</a>
                </Link>
                <Link href="/rooms">
                  <a className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">6 A/C Rooms</a>
                </Link>
                <Link href="/mini-theatre">
                  <a className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Private Mini Theatre</a>
                </Link>
                <Link href="/gallery">
                  <a className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Anjani Gallery</a>
                </Link>
                <Link href="/entertainments">
                  <a className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Anjani Entertainments</a>
                </Link>
                <Link href="/contact">
                  <a className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/">
              <a className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Home</a>
            </Link>
            <Link href="/function-hall">
              <a className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Function Hall</a>
            </Link>
            <Link href="/dining-hall">
              <a className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Dining Hall</a>
            </Link>
            <Link href="/catering">
              <a className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Catering Facility</a>
            </Link>
            <Link href="/rooms">
              <a className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">6 A/C Rooms</a>
            </Link>
            <Link href="/mini-theatre">
              <a className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Private Mini Theatre</a>
            </Link>
            <Link href="/gallery">
              <a className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Anjani Gallery</a>
            </Link>
            <Link href="/entertainments">
              <a className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Anjani Entertainments</a>
            </Link>
            <Link href="/contact">
              <a className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Contact</a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
