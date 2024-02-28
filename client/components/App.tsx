import Navigation from './Navbar'
import About from './About'
import Gallery from './Gallery'
import Services from './Services'
import Contact from './Contact'
import Location from './Location'
import Footer from './Footer'

function App() {
  return (
    <>
      <div className="background">
        <Navigation />
        <About />
        <Services />
        <Gallery />
        <Contact />
        <Location />
        <Footer />
      </div>
    </>
  )
}

export default App
