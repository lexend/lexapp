import React from "react";
import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom"; //alles was App() rendert wird mit Router umschlossen!
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Home />
        {/* Content */}
        {/* Form */}
        <Footer />
      </div>
      <Route path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </Router>
  );
}

export default App;
