// components/Navbar.js
import React from 'react'
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className="w-full mt-10 px-4 flex items-center justify-between">
      {/* Spacer on left for alignment */}
      <div className="w-1/6" />

      {/* Center: Nav Links with logo in middle */}
      <div className="w-4/6 hidden sm:flex items-center justify-center space-x-6 bg-blue-200 rounded-full px-8 py-2 shadow-inner">
        <a href="/" className="text-2xl text-gray-600 hover:text-black font-medium">
          Home
        </a>
        <a href="/about" className="text-2xl text-gray-600 hover:text-black font-medium">
          About
        </a>

        {/* Centered Logo */}
        <a href="/" className="flex items-center justify-center px-2">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
        </a>

        <a href="/services" className="text-2xl text-gray-600 hover:text-black font-medium">
          Services
        </a>
        <a href="/contact" className="text-2xl text-gray-600 hover:text-black font-medium">
          Contact
        </a>
      </div>

      {/* Right: Auth Buttons */}
      <div className="w-1/6 flex items-center justify-end space-x-2">
        <SignedOut>
          <SignInButton>
            <button className="text-white hover:text-gray-300 font-medium px-3 py-1">
              Sign in
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="bg-white text-gray-600 rounded-full font-medium text-sm h-10 px-4 hover:text-black transition">
              Sign up
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  )
}

export default Navbar
