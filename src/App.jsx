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
            <Route path="/" element={<MovieListPage apiPath="now_playing" />} />
            <Route path="/popular" element={<MovieListPage apiPath="popular" />} />
            <Route path="/toprated" element={<MovieListPage apiPath="top_rated" />} />
            <Route path="/upcomming" element={<MovieListPage apiPath="upcoming" />} />
            <Route path="/movie/:id" element={<MovieDetailPage />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<PageNotFound />} />

          </Routes>
        </div>
        <Footer />
      </Router>


    </>
  )
}

export default App