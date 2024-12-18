import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProfessionalExperience from "./pages/ProfessionalExperience";
import AcademicJourney from "./pages/AcademicJourney";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import PortfolioPage from "./pages/PortfolioPage";


function App() {
  return (
    <>
      <Router>
       
        <Routes>
          {/* public routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="experience" element={<ProfessionalExperience />} />
            <Route path="formation" element={<AcademicJourney />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="portfolio" element={<PortfolioPage />} />
            </Route>

        
          
      
        </Routes>
      </Router>
    </>
  );
}

export default App;