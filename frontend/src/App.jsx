
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import {Home} from './pages/Home'
import {Success} from "./pages/Success"
import {NotFound} from './pages/NotFound';
import './App.css';

import React from 'react';

const App = () => {
  return (
    <BrowserRouter> {/* ✅ Correct */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/success' element={<Success />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Toaster />
    </BrowserRouter>
  );
};

export default App; // ✅ Don't forget to export default
