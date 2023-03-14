import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Chat from './pages/Chat';
import SQL from './pages/SQL';
import Report from './pages/Report';
import English from './pages/English';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout window={() => window}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/sql" element={<SQL />} />
            <Route path="/report" element={<Report />} />
            <Route path="/english" element={<English />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
