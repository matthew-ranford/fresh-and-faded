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
      <Navigation />
      <About />
      <div className="background">
        <Services />
      </div>
      <Gallery />
      <Contact />
      <div className="background">
        <Location />
        <Footer />
      </div>
    </>
  )
}

export default App
