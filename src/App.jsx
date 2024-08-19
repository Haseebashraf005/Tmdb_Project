import React from 'react'
import { Footer, Header } from './components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MovieDetailPage, MovieListPage, PageNotFound, Search } from './pages';
import ScrollToTop from './components/ScrollToTop';



const App = () => {
  return (
    <>

      <Router>
        <ScrollToTop />

        <div className="allignment flex flex-col min-h-screen justify-between">
          <Header />

          <div className="dark:bg-slate-700">
            <Routes>
              <Route path="/" element={<MovieListPage apiPath="movie/now_playing" title="Home" />} />
              <Route path="/popular" element={<MovieListPage apiPath="movie/popular" title="Popular / TMDB" />} />
              <Route path="/toprated" element={<MovieListPage apiPath="movie/top_rated" title="Top Rated / TMDB" />} />
              <Route path="/upcomming" element={<MovieListPage apiPath="movie/upcoming" title="Upcomming / TMDB" />} />
              <Route path="/movie/:id" element={<MovieDetailPage />} />
              <Route path="/search" element={<Search apiPath="search/movie" />} />
              <Route path="*" element={<PageNotFound />} />

            </Routes>
          </div>
          <Footer />
        </div>
      </Router>


    </>
  )
}

export default App