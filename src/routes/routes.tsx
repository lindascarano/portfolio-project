import { Route, Routes } from "react-router-dom";
import { Home } from "../views/Home";
import { Interessi } from "../views/Interessi";
import { Lavori } from "../views/Lavori";
import { Contatti } from "../views/Contatti";


export function MainRoutes() {
  return (
    <Routes>
      <Route path="/portfolio-project/" element={<Home />} />
      <Route path="/portfolio-project/interessi" element={<Interessi />} />
      <Route path="/portfolio-project/lavori" element={<Lavori />} />
      <Route path="/portfolio-project/contatti" element={<Contatti />} />
    </Routes>
  );
}
