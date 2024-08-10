import React from 'react'
import { Footer, Header } from './components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MovieDetailPage, MovieListPage, PageNotFound, Search } from './pages';



const App = () => {
  return (
    <>

      <Router>
        <Header />
        <div className="dark:bg-slate-700">
          <Routes>
            <Route path="/" element={<MovieListPage apiPath="movie/now_playing" />} />
            <Route path="/popular" element={<MovieListPage apiPath="movie/popular" />} />
            <Route path="/toprated" element={<MovieListPage apiPath="movie/top_rated" />} />
            <Route path="/upcomming" element={<MovieListPage apiPath="movie/upcoming" />} />
            <Route path="/movie/:id" element={<MovieDetailPage />} />
            <Route path="/search" element={<Search apiPath="search/movie" />} />
            <Route path="*" element={<PageNotFound />} />

          </Routes>
        </div>
        <Footer />
      </Router>


    </>
  )
}

export default App