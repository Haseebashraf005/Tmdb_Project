import React from "react";
import { Card } from "../components";
import useFetch from "../hooks/useFetch";

export const MovieListPage = ({apiPath}) => {
  // let [movies, setMovies] = useState([]);

  let { data: movies } = useFetch(`https://api.themoviedb.org/3/movie/${apiPath}?api_key=b7e24c12dfb18bec008b0a9447323750`)


 
  return (
    <>
      <main>
        <section> 
          {/* total length{movies.length} */}
          <div className="card-container flex flex-wrap justify-start gap-3 py-7 px-10">
            {movies.map((item, index) => (
              <Card key={item.id} movie={item} />
            ))}
          </div>


        </section>
      </main>
    </>
  );
};
