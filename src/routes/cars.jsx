import Image from "../components/image";
import { useEffect } from "react";

export default function Cars() {
  useEffect(() => {
    const scriptBase = document.createElement("script");
    const scriptCall = document.createElement("script");

    scriptBase.src = "//www.auto24.ee/api/auto24API.js";
    scriptBase.type = "text/javascript";
    // script.async = true;
    scriptCall.innerText = `auto24API.load(${import.meta.env.AUTO24KEY});`;

    document.body.appendChild(scriptBase);
    document.body.appendChild(scriptCall);

    return () => {
      document.body.removeChild(scriptBase);
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
