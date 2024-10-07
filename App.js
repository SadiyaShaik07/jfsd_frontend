//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './main/Home';
import About from './main/About';
import Login from './main/Login';
import Registration from './main/Registration';
import ContactUs from './main/ContactUs';
import StudentHome from './student/studenthome'
import LogAchievements from './student/LogAchievements';
import ViewAchievements from './student/ViewAchievements';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
           <Route path="/login" element={<Login />} />
           <Route path="/registration" element={<Registration/>}/>
           <Route path="/contactus" element={<ContactUs/>}/>
           <Route path= "/studenthome" element={<StudentHome/>}/>
           <Route path="/LogAchievements" element={<LogAchievements/>}/>
           <Route path="/ViewAchievements" element={<ViewAchievements/>}/>
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
