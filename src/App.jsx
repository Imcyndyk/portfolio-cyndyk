// Import npm packages
import { Routes, Route } from 'react-router-dom';

// Import pages 
import Layout from './components/layout/Layout'
// import Home from './pages/Home';
import Home1 from './pages/Home1';
// import AboutPage from './pages/AboutPage';
import AboutPage1 from './pages/AboutPage1';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage1 from './pages/ContactPage1';
// import ContactPage from './pages/ContactPage';

import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      {/* MAIN LAYOUT WRAPPER & ROUTED CHILDREN */}
      <Route path="/" element={<Layout />}>
        {/* MAIN PAGES */}
        {/* <Route index element={<Home />} /> */}
        <Route index element={<Home1 />} />
        {/* <Route path="about" element={<AboutPage />} /> */}
        <Route path="about1" element={<AboutPage1 />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="contact1" element={<ContactPage1 />} />
        
        {/* ERROR 404 PAGE */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;