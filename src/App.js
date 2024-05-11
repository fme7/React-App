import Header from "./Header.js";
import Footer from "./Footer.js";
import "./App.css";
import { useState } from "react";

function App() {
  let [openMenu, setOpenMenu] = useState(true);
  function toggleMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <>
      <Header></Header>
      <Footer></Footer>
    </>
  );
}

export default App;
