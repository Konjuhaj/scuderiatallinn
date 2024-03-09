import Image from "../components/image";
import { useEffect } from "react";

export default function Template() {
  useEffect(() => {
    const script = document.createElement("script");
    const script2 = document.createElement("script");
    script.src = "//www.auto24.ee/api/auto24API.js?ver=6.0.3";
    script.type = "text/javascript";

    script.onload = () => {
      document.body.appendChild(script2);
      window.auto24Callback = (data) => {
        console.log("Data received:", data);
      };
      script2.appendChild(
        document.createTextNode(`
                  auto24API.setCallback(auto24Callback)
                    auto24API.load('80023381ff22186911bc932eff366eab');`)
      );
    };

    document.body.appendChild(script);
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script);
      delete window.auto24Callback;
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
