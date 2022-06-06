import './App.css';
import './AppResponsive.css';
import React from 'react';
import Header from './myComponents/Header';
import Welcome from './myComponents/Welcome';
import Product from './myComponents/Product';
import Future from './myComponents/Future';
import Form from './myComponents/Form';
import Footer from './myComponents/Footer';
import About from './myComponents/About';
import When from './myComponents/aboutComponents/When';
import Why from './myComponents/aboutComponents/Why';
import How from './myComponents/aboutComponents/How';
import Goals from './myComponents/aboutComponents/Goals';
import SignIn from './myComponents/SignIn';
import Register from './myComponents/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={
        <>
          <Welcome />
          <Product />
          <Future />
          <Form />
        </>} />
        <Route path='/about' element={<About />} />
        <Route path='/about/when' element={<When />} />
        <Route path='/about/why' element={<Why />} />
        <Route path='/about/how' element={<How />} />
        <Route path='/about/goals' element={<Goals />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
