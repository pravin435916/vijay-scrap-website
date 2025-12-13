import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'
import Blog from './pages/Blog'
import LoginSignup from './pages/LoginSignup'
import BookSession from './pages/BookSession'
import Contact from './components/Contact'
import Partners from './components/Partners'
import Offers from './components/Offers'
import Error404 from './pages/Error404'
import ScrapRatePage from './pages/ScrapRatePage'
import KabadiWalaHomepage from './components/KabadiWalaHomepage'
import AboutPage from './components/About'
import Footer from './components/Footer'
import ServicesPage from './pages/ServicesPage'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<KabadiWalaHomepage />} />
        <Route path='/*' element={<Error404 />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/scrap-rates' element={<ScrapRatePage />} />
        <Route path='/book' element={<BookSession />} />
        <Route path='/partners' element={<Partners />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/services' element={<ServicesPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App