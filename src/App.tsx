import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
