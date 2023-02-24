import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Detail from './components/Detail';
import Update from './components/Update';
import Navbar from './components/Navbar';
import "./App.css"
import PetList from './components/PetList';
import PetForm from './components/PetForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/" />
          {/* <Route element={<PetList/>} path="/"/> */}
          <Route element={<PetForm/>} path="/pet/" />
          <Route element={<Detail/>} path="/pet/:id/" />
          <Route element={<Update/>} path="/pet/edit/:id/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;