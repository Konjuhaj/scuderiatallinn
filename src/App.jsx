import { useState } from "react";
import "./App.css";
import Events from "./components/events";
import Image from "./components/image";
import Service from "./components/service";

function App() {
  return (
    <>
      <Image
        src="src/assets/Hero_1.jpg"
        alt="placeholder"
        customClass="w-full"
      ></Image>
      <Service></Service>
      <Image
        src="src/assets/Hero_2.jpg"
        alt="placeholder"
        customClass="w-full h-96 object-cover"
      ></Image>
      <Events></Events>
    </>
  );
}

export default App;
