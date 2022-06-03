import './App.css';
import Header from './myComponents/Header';
import Welcome from './myComponents/Welcome';
import Product from './myComponents/Product';
import Future from './myComponents/Future';
import Form from './myComponents/Form';
import Footer from './myComponents/Footer';
import About from './myComponents/About';
import SignIn from './myComponents/SignIn';
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
        <Route path='/signin' element={<SignIn />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
