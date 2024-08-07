import React from 'react'
import { Card, Footer, Header, Popular, TopRated, UpComming } from './components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MovieDetailPage, MovieListPage, PageNotFound, Search } from './pages';



const App = () => {
  return (
    <>

      <Router>
        <Header />
        <div className="dark:bg-slate-700">
          <Routes>
            <Route path="/" element={<MovieListPage />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/toprated" element={<TopRated />} />
            <Route path="/upcomming" element={<UpComming />} />
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