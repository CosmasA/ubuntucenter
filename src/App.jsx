import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from './components/Topbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Trainings from './components/Trainings'
import Resources from './components/Resources'
import Statistics from './components/Statistics'
import NotFound from './components/NotFound'

function App() {
  return (
    <Router basename="/ubuntucenter">
      <Topbar />
      <Header />
      <Routes>
        <Route path="/" element={<Hero id="home" />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/trainings" element={<Trainings />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}
export default App
