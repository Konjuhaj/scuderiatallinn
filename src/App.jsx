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
        <Route exact path="" element={<Layout />}>
          <Route exact index element={<Root />} />
          <Route exact path="cars" element={<Cars />} />
          <Route exact path="car" element={<Template />} />
          <Route exact path="*" element={<Pagenotfound />} />
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
