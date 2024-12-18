import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';


const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>

          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/web-dev" element={<WebDev />} />
          <Route path="/mobile-dev" element={<MobileDev />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;