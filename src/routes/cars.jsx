import { useEffect } from "react";
// import auto24API from "//www.auto24.ee/api/auto24API.js";

export default function Template() {
  useEffect(() => {
    const root = document.querySelector("#root");
    const script = document.createElement("script");
    const javascriptCode = `
    auto24API.load("80023381ff22186911bc932eff366eab");
    // Your JavaScript code here
`;

    // Create a text node containing the JavaScript code
    const scriptContent = document.createTextNode(javascriptCode);

    // Append the text node to the script element
    script.appendChild(scriptContent);
    const auto24Content = document.querySelector("#auto24Content");
    root.insertBefore(script, auto24Content);
  }, []);

  useEffect(() => {
    // Select elements by class name and apply styles
    const searchFields = document.querySelector('.searchFields');
    if (searchFields) {
      searchFields.style.visibility = 'hidden';
      searchFields.style.height = '0';
    }

    const vehiclesList = document.querySelector('.vehicles_list');
    if (vehiclesList) {
      vehiclesList.style.display = 'grid';
      vehiclesList.style.gridTemplateColumns = '1fr 1fr 1fr';
      vehiclesList.style.gap = '1rem';
      vehiclesList.style.justifyItems = 'center';
      vehiclesList.style.paddingLeft = '10rem';
      vehiclesList.style.paddingRight = '10rem';
    }
  }, []);

  return (
    <>
      {/* <script>{auto24API.load("80023381ff22186911bc932eff366eab")}</script> */}
      <div id="auto24Content"></div>
    </>
  );
}
