import { Route, Routes } from "react-router-dom";
import { Home } from "../views/Home";
import { About } from "../views/About";
import { Works } from "../views/Works";
import { Contacts } from "../views/Contacts";

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/portfolio-project/" element={<Home />} />
      <Route path="/portfolio-project/about" element={<About />} />
      <Route path="/portfolio-project/works" element={<Works />} />
      <Route path="/portfolio-project/contacts" element={<Contacts />} />
    </Routes>
  );
}
