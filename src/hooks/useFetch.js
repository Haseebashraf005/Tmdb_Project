import React, { useEffect, useState } from 'react'

const useFetch = (apiPath,queryTerm="") => {

  let [data, setData] = useState([])

  let url = `https://api.themoviedb.org/3/${apiPath}?api_key=b7e24c12dfb18bec008b0a9447323750&query=${queryTerm}`


  useEffect(() => {
    async function fetchMovies() {
      let response = await fetch(url);
      // console.log(response);
      let data_api = await response.json();
      // console.log(data)
      // console.log(data.results)
      setData(data_api.results);

    }
    fetchMovies();
  }, [url]);
  return { data }
}

export default useFetch