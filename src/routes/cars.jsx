import Image from "../components/image";
import { useEffect } from "react";

export default function Cars() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "//www.auto24.ee/api/auto24API.js?ver=6.0.3";
    script.type = "text/javascript";
    script.async = true;

    script.onload = () => {
      auto24API.load(import.meta.env.AUTO24KEY);
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
