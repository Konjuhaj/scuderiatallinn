import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Template from "./routes/auto24";
import Cars from "./routes/cars";
import Pagenotfound from "./routes/pagenotfound";
import Root from "./routes/root";

import { Outlet, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Root />} />
          <Route path="cars" element={<Cars />} />
          <Route path="template/auto24" element={<Template />} />
          <Route path="*" element={<Pagenotfound />} />
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
