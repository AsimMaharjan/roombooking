import React from "react";
//import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import Hotel from "./pages/Hotels";
import HotelDetail from "./pages/HotelDetail";
import Error from "./pages/Error";
import {Route,Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";

function App() {
  return (
    <>

    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/hotels" component={Hotel}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/hotel/:slug" component={HotelDetail}/>
    <Route component={Error}/>
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
