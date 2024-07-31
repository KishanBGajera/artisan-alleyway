import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./components/Home/Home"
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Navbar from './components/Common/Navbar/Navbar';
import Explore from './components/Explore/Explore';
import Locality from './components/Locality/Locality';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

const App = () => {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/locality" element={<Locality />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
    </Router>
  );
};

export default App;