import React, { useEffect } from "react";
import { Card } from "../components";
import useFetch from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";

export const Search = ({ apiPath }) => {

  let [searchParams] = useSearchParams();
  let queryTerm = searchParams.get("q")
  // console.log(queryTerm)


  let { data: movies } = useFetch(apiPath, queryTerm)

  useEffect(()=>{
    document.title = `${queryTerm.toUpperCase()}`
  })

  return (
    <>
      <main>
        <section>
          <p className="text-3xl text-gray-700 dark:text-white p-2">
            {
              movies.length > 0 ?
                `${queryTerm.toUpperCase()} "${movies.length}" Records found` 
                :

                `No Result Found for '${queryTerm}'`
            }
          </p>
        </section>

        
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
}
