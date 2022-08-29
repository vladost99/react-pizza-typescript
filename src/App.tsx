import "scss/app.scss";
import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "components/Header";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Cart from "pages/Cart";
// import FullPizza from "pages/FullPizza";

//export const SearchContext = createContext();

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="wrapper">
      <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            {/* <Route path="/pizza/:id" element={<FullPizza/>} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      {/* <SearchContext.Provider value={{searchValue, setSearchValue}}>
      </SearchContext.Provider> */}
    </div>
  );
}


export default App;