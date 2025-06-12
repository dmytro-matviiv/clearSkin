import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Content from './Components/Content/Content';
import Explanation from './Components/Explanation/Explanation';
import PriceList from './Components/PriceList/PriceList.';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import AdminPanel from './Components/AdminPanel/AdminPanel';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Explanation />
              <Content />
              <PriceList />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </>
  );
}

export default App;
