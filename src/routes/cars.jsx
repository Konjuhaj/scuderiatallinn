import Image from "../components/image";
import { useEffect } from "react";

export default function Cars() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "//www.auto24.ee/api/auto24API.js?ver=6.0.3";
    script.type = "text/javascript";
    script.async = true;

    console.log(import.meta.env.VITE_SOME_KEY);
    script.onload = () => {
      auto24API.load(import.meta.env.VITE_SOME_KEY);

      console.log(import.meta.env.VITE_SOME_KEY);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <Image
        src="src/assets/Hero_1.jpg"
        alt="placeholder"
        customClass="w-full lg:max-h-[calc(100vh-20vh)] object-cover"
      ></Image>
      <div id="auto24Content"></div>
    </>
  );
}
