import Image from "../components/image";
import { useEffect } from "react";

export default function Template() {
  useEffect(() => {
    const root = document.querySelector("#root");
    const script = document.createElement("script");
    const javascriptCode = `
    auto24API.load("80023381ff22186911bc932eff366eab");
`;

    // Create a text node containing the JavaScript code
    const scriptContent = document.createTextNode(javascriptCode);

    // Append the text node to the script element
    script.appendChild(scriptContent);
    const auto24Content = document.querySelector("#auto24");
    root.insertBefore(script, auto24Content);
  }, []);
  const divContent = "{AUTO24CONTENT}";
  return (
    <>
      <div className="auto24" id="auto24Content">
        {divContent}{" "}
      </div>
    </>
  );
}
