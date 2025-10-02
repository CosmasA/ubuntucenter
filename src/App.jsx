import './App.css'
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
import Scroll from './components/Scroll'

function App() {
  return (
    <>
      <Topbar />
      <Header />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="services"><Services /></section>
        <section id="trainings"><Trainings /></section>
        <section id="resources"><Resources /></section>
        <section id="statistics"><Statistics /></section>
        <section id="contact"><Contact /></section>
        <section id="scroll"><Scroll /></section>
      </main>
      <Footer />
    </>
  )
}

export default App
