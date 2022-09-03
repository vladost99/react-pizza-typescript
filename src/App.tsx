import "scss/app.scss";
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "components/Header";
import Home from "pages/Home";

const NotFound = React.lazy(() => import('pages/NotFound'));
const Cart = React.lazy(() => import('pages/Cart'));

function App() {

  return (
    <div className="wrapper">
      <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<React.Suspense><Cart /></React.Suspense>} />
            <Route path="*" element={<React.Suspense><NotFound /></React.Suspense>} />
          </Routes>
        </div>
    </div>
  );
}


export default App;
