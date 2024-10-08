import React from 'react'
import {Link} from "react-router-dom"

export const Footer = () => {
  return (


    <footer className=" bg-white shadow dark:bg-gray-800">
      <div className="max-w-8xl mx-auto max-w-screen-4xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link to="/" className="hover:underline">Alchemative</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link to="/" className="hover:underline me-4 md:me-6">instagram</Link>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">TikTok Policy</a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Linkedin</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
    </footer>

  )
}
