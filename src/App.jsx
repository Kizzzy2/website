import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import CeramicCoating from './pages/CeramicCoating'
import Pricing from './pages/Pricing'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Areas from './pages/Areas'
import Fleet from './pages/Fleet'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import FulshearMobileDetailing from './pages/FulshearMobileDetailing'
import KatyMobileDetailing from './pages/KatyMobileDetailing'
import CypressMobileDetailing from './pages/CypressMobileDetailing'
import SugarLandMobileDetailing from './pages/SugarLandMobileDetailing'
import WoodlandsMobileDetailing from './pages/WoodlandsMobileDetailing'
import PearlandMobileDetailing from './pages/PearlandMobileDetailing'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ceramic-coating" element={<CeramicCoating />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/areas" element={<Areas />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fulshear-mobile-detailing" element={<FulshearMobileDetailing />} />
        <Route path="/katy-mobile-detailing" element={<KatyMobileDetailing />} />
        <Route path="/cypress-mobile-detailing" element={<CypressMobileDetailing />} />
        <Route path="/sugar-land-mobile-detailing" element={<SugarLandMobileDetailing />} />
        <Route path="/woodlands-mobile-detailing" element={<WoodlandsMobileDetailing />} />
        <Route path="/pearland-mobile-detailing" element={<PearlandMobileDetailing />} />
      </Routes>
      <Footer />
    </>
  )
}
