import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Enroll from './pages/Enroll';
import Gallery from './pages/Gallery';
import Donate from './pages/Donate';
import STEM from './pages/STEM';
import Events from './pages/Events';
import ScrollToTop from './components/ScrollToTop'; // Import the new component

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Place this right after Router */}
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/enroll" element={<Enroll />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/stem" element={<STEM />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;