import { Route, Routes } from "react-router-dom";
import { HomePage, AboutPage } from "../pages";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="dtmoney/" element={<HomePage />} />
      <Route path="dtmoney/about" element={<AboutPage />} />
    </Routes>
  );
}
