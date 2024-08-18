import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const MovieDetailPage = () => {
  let param = useParams();
  let [data, setData] = useState(null);  // Initialize with null
  let [loading, setLoading] = useState(true);  // Loading state

  useEffect(() => {
    async function fetchMoviebyId() {
      setLoading(true);  // Start loading
      let response = await fetch(`https://api.themoviedb.org/3/movie/${param.id}?api_key=b7e24c12dfb18bec008b0a9447323750`);
      let dataByID = await response.json();
      setData(dataByID);
      setLoading(false);  // Data fetched, stop loading
      // console.log(dataByID);
    }

    fetchMoviebyId();
  }, [param.id]);

  useEffect(() => {
    document.title = `${data?.title}`
  })

  let imagepath =
    data?.poster_path 
    // false
      ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
      : "../backup.jpg";

  if (loading) {
    return (
      <main className="font-sans bg-white dark:bg-transparent">
        <div className="p-4 lg:max-w-screen-xl max-w-lg mx-auto">
          <div className="text-center text-gray-900 dark:text-white">
            Loading...

          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="font-sans bg-white dark:bg-transparent">
      <div className="p-4 lg:max-w-screen-xl max-w-lg mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-6 max-lg:gap-12">
          <div className="w-full lg:sticky top-0 sm:flex gap-2">
            <img
              src={imagepath}
              alt={data.title}
              className="w-4/5 rounded-md object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl font-semibold text-gray-900 dark:text-white">{data.title}</h2>
            <div className="flex flex-wrap gap-4 mt-4">
              <p className="text-2xl text-gray-800 dark:text-white">{data.overview}</p>
            </div>

            {/* Tags UI Area */}
            <div className="mt-4 flex flex-wrap gap-6 ">
              {data.genres?.map((item, index) => (
                <span
                  key={index}
                  className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border text-gray-900 dark:text-white border-gray-300 dark:border-white hover:text-gray-900 dark:hover:text-white transition-all duration-300"
                >
                  {item.name}
                </span>
              ))}
            </div>

            {/* Budget Details Section */}

            <div className="mt-4 flex gap-4">
              <span className="py- rounded-lg text-md tracking-wider font-medium text-gray-900 dark:text-white transition-all duration-300">
                Run Time:
              </span>
              <span className="py- rounded-lg text-md tracking-wider text-gray-800 dark:text-white transition-all duration-300">
                {data.runtime} min.
              </span>
            </div>

            <div className="mt-4 flex gap-4">
              <span className="py- rounded-lg text-md tracking-wider font-medium text-gray-900 dark:text-white transition-all duration-300">
                Budget:
              </span>
              <span className="py- rounded-lg text-md tracking-wider text-gray-800 dark:text-white transition-all duration-300">
                {data.budget}
              </span>
            </div>

            <div className="mt-4 flex gap-4">
              <span className="py- rounded-lg text-md tracking-wider font-medium text-gray-900 dark:text-white transition-all duration-300">
                Revenue:
              </span>
              <span className="py- rounded-lg text-md tracking-wider text-gray-800 dark:text-white transition-all duration-300">
                {data.revenue}
              </span>
            </div>
            <div className="mt-4 flex gap-4">
              <span className="py- rounded-lg text-md tracking-wider font-medium text-gray-900 dark:text-white transition-all duration-300">
                Release Date:
              </span>
              <span className="py- rounded-lg text-md tracking-wider text-gray-800 dark:text-white transition-all duration-300">
                {data.release_date}
              </span>
            </div>
            <div className="mt-4 flex gap-4">
              <span className="py- rounded-lg text-md tracking-wider font-medium text-gray-900 dark:text-white transition-all duration-300">
                IMDB Code:
              </span>
              <span className="py- rounded-lg text-md tracking-wider text-gray-800 dark:text-white transition-all duration-300">
                {data.imdb_id}
              </span>
            </div>




          </div>
        </div>
      </div>
    </main>
  );
};
