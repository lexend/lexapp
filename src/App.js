import React from "react";
import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom"; //alles was App() rendert wird mit Router umschlossen!
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Navbar />
        <Route path="/" exact component={Home}/>
        <Route path="/login" component={Login}/>
        {/* Content */}
        {/* Form */}
        <Route path="/about" component={About}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
