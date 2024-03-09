import Image from "../components/image";
import { useEffect } from "react";

export default function Template() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "//www.auto24.ee/api/auto24API.js?ver=6.0.3";
    script.type = "text/javascript";
    // script.async = true;

    console.log(import.meta.env.VITE_SOME_KEY);
    script.onload = () => {
      console.log("sending request");
      auto24API.load(import.meta.env.VITE_SOME_KEY);
      console.log("received response");
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const divContent = "{AUTO24CONTENT}";
  return (
    <>
      <Image
        src="src/assets/Hero_1.jpg"
        alt="placeholder"
        customClass="w-full lg:max-h-[calc(100vh-20vh)] object-cover"
      ></Image>
      <div className="auto24">{divContent}</div>
      <div id="auto24Content"></div>
    </>
  );
}
