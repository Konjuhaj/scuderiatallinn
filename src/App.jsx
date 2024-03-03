import "./App.css";
import Navbar from "./components/navbar";
import Root from "./routes/root";
import Template from "./routes/auto24";
import Cars from "./routes/cars";
import Footer from "./components/footer";

import { Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Root />} />
          <Route path="cars" element={<Cars />} />
          <Route path="auto24" element={<Template />} />
        </Route>
      </Routes>
    </>
  );
}

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
