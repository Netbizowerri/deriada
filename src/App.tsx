import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Layout from './components/layout/Layout'
import LoadingSpinner from './components/ui/LoadingSpinner'

// Lazy load all pages for better performance
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const ExportProducts = lazy(() => import('./pages/ExportProducts'))
const ImportServices = lazy(() => import('./pages/ImportServices'))
const Logistics = lazy(() => import('./pages/Logistics'))
const Contact = lazy(() => import('./pages/Contact'))

function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/export-products" element={<ExportProducts />} />
          <Route path="/import-services" element={<ImportServices />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App
