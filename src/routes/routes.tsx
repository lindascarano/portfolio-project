import { Route, Routes } from "react-router-dom";
import { Home } from "../views/Home";
import { About } from "../views/About";
import { Works } from "../views/Works";
import { Contacts } from "../views/Contacts";

export function MainRoutes(){
    return(
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="*" element={<Contacts />} />
      </Routes>
    )
}