import React from 'react'
import { Link } from 'react-router-dom'

export const PageNotFound = () => {

  document.title = `Page Not Found / TMDB`
  return (
    <main>
      <section>
        <section class="bg-gray-300 border rounded-2xl dark:bg-gray-900 mt-[100px] dark:border-black">
          <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-sm text-center">
              <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
              <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Page Not Found</p>
              <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
              <Link to='/' class="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</Link>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}
