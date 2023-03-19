import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Chat from './pages/Chat';
import SQL from './pages/SQL';
import Report from './pages/Report';
import English from './pages/English';
import AuthRoute from './components/AuthRoute';
import { AuthContextProvider } from './components/AuthContextProvider';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <BrowserRouter>
          <Layout window={() => window}>
            <Routes>
              <Route
                path="/"
                element={
                  <AuthRoute>
                    <Home />
                  </AuthRoute>
                }
              />
              <Route path="/Login" element={<Login />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/Chat" element={<Chat />} />
              <Route path="/SQL" element={<SQL />} />
              <Route path="/Report" element={<Report />} />
              <Route path="/English" element={<English />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
