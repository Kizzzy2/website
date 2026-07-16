import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'
import Cursor from './components/Cursor'

// Lazy load every page — only loads what the user actually visits
const Home = lazy(() => import('./pages/Home'))
const CeramicCoating = lazy(() => import('./pages/CeramicCoating'))
const Pricing = lazy(() => import('./pages/Pricing'))
const Gallery = lazy(() => import('./pages/Gallery'))
const About = lazy(() => import('./pages/About'))
const Areas = lazy(() => import('./pages/Areas'))
const Fleet = lazy(() => import('./pages/Fleet'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const Testimonials = lazy(() => import('./pages/Testimonials'))
const Contact = lazy(() => import('./pages/Contact'))
const FAQs = lazy(() => import('./pages/FAQs'))
const InteriorDetailing = lazy(() => import('./pages/InteriorDetailing'))
const PaintCorrection = lazy(() => import('./pages/PaintCorrection'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Neighborhood pages
const FulshearMobileDetailing = lazy(() => import('./pages/FulshearMobileDetailing'))
const KatyMobileDetailing = lazy(() => import('./pages/KatyMobileDetailing'))
const CypressMobileDetailing = lazy(() => import('./pages/CypressMobileDetailing'))
const SugarLandMobileDetailing = lazy(() => import('./pages/SugarLandMobileDetailing'))
const WoodlandsMobileDetailing = lazy(() => import('./pages/WoodlandsMobileDetailing'))
const PearlandMobileDetailing = lazy(() => import('./pages/PearlandMobileDetailing'))
const RiverOaksMobileDetailing = lazy(() => import('./pages/RiverOaksMobileDetailing'))
const MemorialMobileDetailing = lazy(() => import('./pages/MemorialMobileDetailing'))
const WestUniversityMobileDetailing = lazy(() => import('./pages/WestUniversityMobileDetailing'))
const BellaireMobileDetailing = lazy(() => import('./pages/BellaireMobileDetailing'))
const TanglewoodMobileDetailing = lazy(() => import('./pages/TanglewoodMobileDetailing'))
const HeightsMobileDetailing = lazy(() => import('./pages/HeightsMobileDetailing'))
const SpringMobileDetailing = lazy(() => import('./pages/SpringMobileDetailing'))
const TomballMobileDetailing = lazy(() => import('./pages/TomballMobileDetailing'))
const KingwoodMobileDetailing = lazy(() => import('./pages/KingwoodMobileDetailing'))
const AtascocitaMobileDetailing = lazy(() => import('./pages/AtascocitaMobileDetailing'))
const ConroeMobileDetailing = lazy(() => import('./pages/ConroeMobileDetailing'))
const MagnoliaMobileDetailing = lazy(() => import('./pages/MagnoliaMobileDetailing'))
const FriendswoodMobileDetailing = lazy(() => import('./pages/FriendswoodMobileDetailing'))
const LeagueCityMobileDetailing = lazy(() => import('./pages/LeagueCityMobileDetailing'))
const ClearLakeMobileDetailing = lazy(() => import('./pages/ClearLakeMobileDetailing'))
const MissouriCityMobileDetailing = lazy(() => import('./pages/MissouriCityMobileDetailing'))
const RichmondMobileDetailing = lazy(() => import('./pages/RichmondMobileDetailing'))
const HumbleMobileDetailing = lazy(() => import('./pages/HumbleMobileDetailing'))

function PageLoader() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#07070f' }}>
      <div style={{ width: 36, height: 36, border: '3px solid rgba(37,99,235,0.2)', borderTop: '3px solid #2563EB', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}

export default function App() {
  useEffect(() => {
    const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (!isTouchDevice()) document.body.classList.add('has-cursor')
    return () => document.body.classList.remove('has-cursor')
  }, [])

  return (
    <>
      <Cursor />
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
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
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/interior-detailing" element={<InteriorDetailing />} />
          <Route path="/paint-correction" element={<PaintCorrection />} />
          <Route path="/fulshear-mobile-detailing" element={<FulshearMobileDetailing />} />
          <Route path="/katy-mobile-detailing" element={<KatyMobileDetailing />} />
          <Route path="/cypress-mobile-detailing" element={<CypressMobileDetailing />} />
          <Route path="/sugar-land-mobile-detailing" element={<SugarLandMobileDetailing />} />
          <Route path="/woodlands-mobile-detailing" element={<WoodlandsMobileDetailing />} />
          <Route path="/pearland-mobile-detailing" element={<PearlandMobileDetailing />} />
          <Route path="/river-oaks-mobile-detailing" element={<RiverOaksMobileDetailing />} />
          <Route path="/memorial-mobile-detailing" element={<MemorialMobileDetailing />} />
          <Route path="/west-university-mobile-detailing" element={<WestUniversityMobileDetailing />} />
          <Route path="/bellaire-mobile-detailing" element={<BellaireMobileDetailing />} />
          <Route path="/tanglewood-mobile-detailing" element={<TanglewoodMobileDetailing />} />
          <Route path="/heights-mobile-detailing" element={<HeightsMobileDetailing />} />
          <Route path="/spring-mobile-detailing" element={<SpringMobileDetailing />} />
          <Route path="/tomball-mobile-detailing" element={<TomballMobileDetailing />} />
          <Route path="/kingwood-mobile-detailing" element={<KingwoodMobileDetailing />} />
          <Route path="/atascocita-mobile-detailing" element={<AtascocitaMobileDetailing />} />
          <Route path="/conroe-mobile-detailing" element={<ConroeMobileDetailing />} />
          <Route path="/magnolia-mobile-detailing" element={<MagnoliaMobileDetailing />} />
          <Route path="/friendswood-mobile-detailing" element={<FriendswoodMobileDetailing />} />
          <Route path="/league-city-mobile-detailing" element={<LeagueCityMobileDetailing />} />
          <Route path="/clear-lake-mobile-detailing" element={<ClearLakeMobileDetailing />} />
          <Route path="/missouri-city-mobile-detailing" element={<MissouriCityMobileDetailing />} />
          <Route path="/richmond-mobile-detailing" element={<RichmondMobileDetailing />} />
          <Route path="/humble-mobile-detailing" element={<HumbleMobileDetailing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
      <FloatingCTA />
    </>
  )
}
