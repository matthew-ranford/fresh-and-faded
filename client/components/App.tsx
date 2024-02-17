import Navigation from './Navbar'
import About from './About'
import Gallery from './Gallery'
import Contact from './Contact'
import Location from './Location'
import Footer from './Footer'

import { motion } from 'framer-motion'

function App() {
  return (
    <>
      {/* <div className="background"> */}
      <Navigation />
      <About />
      <motion.div
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: 'linear', duration: 2.5 }}
      >
        <Gallery />
        <Contact />
        <Location />
        <Footer />
      </motion.div>
      {/* </div> */}
    </>
  )
}

export default App
