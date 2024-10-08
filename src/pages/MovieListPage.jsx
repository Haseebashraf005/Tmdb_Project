import React, { useEffect } from "react";
import { Card } from "../components";
import useFetch from "../hooks/useFetch";

export const MovieListPage = ({ apiPath, title }) => {
  // let [movies, setMovies] = useState([]);

  let { data: movies } = useFetch(apiPath,)

  useEffect(()=>{

    document.title = title 
  })



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
