import React, { useEffect, useState } from 'react'

const useFetch = (url) => {

    let [data, setData] = useState([])

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
    return {data}
}

export default useFetch