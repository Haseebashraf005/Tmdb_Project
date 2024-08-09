import React from 'react'
import { Link } from 'react-router-dom';

export const Card = ({ movie }) => {
  // console.log(movie)

  let { id, title, overview, poster_path } = movie;

  let imagepath = `https://image.tmdb.org/t/p/w500/${poster_path}`

  return (
    <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-900">
      <Link to={`/movie/${id}`}>
        {
          // false ?

          poster_path ?

            <img className="rounded-t-lg" src={imagepath} alt="" />
            :
            <img className="rounded-t-lg" src="./backup.jpg" />

        }
      </Link>
      <div className="p-5">
        <Link to={`/movie/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>

      </div>
    </div>
  )
}
