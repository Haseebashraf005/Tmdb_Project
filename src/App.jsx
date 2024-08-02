import React from 'react'
import { Card, Footer, Header,Popular,TopRated,UpComming } from './components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MovieDetailPage, MovieListPage, PageNotFound, Search } from './pages';

 

const App = () => {
  return (
    <>

      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<MovieListPage />} />
          <Route path="/popular" element={<Popular/>} />
          <Route path="/toprated" element={<TopRated />} />
          <Route path="/upcomming" element={<UpComming />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<PageNotFound />} />

        </Routes>
        <Footer/>
      </Router>


    </>
  )
}

export default App