import "./App.css";
import About from "./components/about";
import Events from "./components/events";
import Image from "./components/image";
import Navbar from "./components/navbar";
import Service from "./components/service";
import Store from "./components/store";

function App() {
  return (
    <>
      <Navbar />
      <Image
        src="src/assets/Hero_1.jpg"
        alt="placeholder"
        customClass="w-full lg:max-h-[calc(100vh-20vh)] object-cover"
      ></Image>
      <Service></Service>
      <Image
        src="src/assets/Hero_2.jpg"
        alt="placeholder"
        customClass="w-full max-h-96 object-cover"
      ></Image>
      <Events></Events>
      <About></About>
      <Store></Store>
    </>
  );
}

export default App;
