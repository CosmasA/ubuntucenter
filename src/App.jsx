
import './App.css'
import Topbar from './components/Topbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Trainings from './components/Trainings'
// import Resources from './components/Resources'
import Statistics from './components/Statistics'

function App() {
  return (
    <>
      <Topbar />
      <Header />
      <Hero id="home" />
      <About id="about" />
      <Services id="services" />
      <Trainings id="trainings" />
      {/* <Resources id="resources" /> */}
      <Statistics id="statistics" />
      <Contact id="contact" />
      <Footer />
    </>
  )
}
export default App
