import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Home from '@/pages/Home';
import { Link } from 'react-router-dom';

import Explorework from '@/pages/Explorework';
import About from '@/pages/About';
import Events from '@/pages/Events';
import Blog from '@/pages/Blog';
import Contact from '@/pages/Contact';
import Music from '@/pages/Music';
import Footer from '@/components/Footer';
import Books from '@/pages/Books';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Explorework" element={<Explorework />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/music" element={<Music />} />
            <Route path="/books" element={<Books />} />

          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;