import './App.css'
import React from 'react'
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Nopage from './components/Nopage'
import User from './components/User'
import FormComponent from './components/Form';
import { Ucprovider } from './components/Usercontext';
import Userdetails from './components/Userdetails';
import Admin from './components/Admin';
import { Protection } from './components/Protection';
import Login from './components/Login';
import { AuthProvider } from './components/Authcontext';
function App() {
  return (
    <div className="App">
       <AuthProvider>
      <Ucprovider>
      <Navbar />
      <Routes>
        <Route index element={<FormComponent/>} />
        <Route path="Form" element={<FormComponent />} />
        <Route path="User" element={<User />} />
        <Route path="Login" element={<Login />} />
        <Route path="Admin" element={<Protection><Admin /></Protection>} />
        <Route path="Userdetails" element={<Userdetails/>}/>
        <Route path="*" element={<Nopage />} />
      </Routes>
      </Ucprovider>
      </AuthProvider>
    </div>
    
  );
}

export default App;
