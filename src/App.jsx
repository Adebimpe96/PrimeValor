import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import OurProducts from './components/OurProducts.jsx'
import Contact from './components/Contacts.jsx'
import Footer from './components/Footer.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import PrimeInsights from './pages/PrimeInsights.jsx'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <OurProducts />
      <Contact />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/insights" element={<PrimeInsights />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
