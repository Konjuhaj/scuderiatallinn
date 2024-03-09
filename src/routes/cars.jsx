import Image from "../components/image";
import { useEffect } from "react";

const auto24Callback = () => {
  console.log("callback called");
};

export default function Template() {
  useEffect(() => {
    const script = document.createElement("script");
    const root = document.querySelector("#auto24Content");

    script.src =
      "//www.auto24.ee/api/auto24API.js?ver=6.0.3&callback=auto24Callback";
    script.type = "module";
    // script.async = true;

    script.onload = () => {
      console.log("sending request");
      auto24API.load(import.meta.env.VITE_SOME_KEY);

      auto24API.setCallback(auto24Callback);
      console.log("received response");
    };

    root.prepend(script);

    return () => {};
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
