import Header from "./Header.js";
import Footer from "./Footer.js";
import Aside from "./Aside.js";
import Home from "./Home.js";
import Posts from "./Posts.js";
import Users from "./Users.js";
import PostDetails from "./PostDetails.js";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let [openMenu, setOpenMenu] = useState(true);
  function toggleMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <BrowserRouter>
      <>
        <Header toggle={toggleMenu} ></Header>
        <main className="container">
          <Aside open={openMenu}></Aside>
          <div className="routeHolder">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/users" element={<Users />} />
              <Route path="/posts/:postId" element={<PostDetails/>} />
              <Route path="*" element={<div>404, Page Not Found :(</div>} ></Route>
            </Routes>
          </div>
        </main>
        <Footer></Footer>
      </>
    </BrowserRouter>
  );
}

export default App;
