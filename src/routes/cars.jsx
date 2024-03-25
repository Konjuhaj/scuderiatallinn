import { useEffect } from "react";
import PreLoader from "../components/preLoader";

window.auto24CarsCallback = () => {
  console.log("auto24CarsCallback");

  const cars = Array.from(document.querySelectorAll(".vehicles_list > div"));
  const { ferraries, otherCars } = cars.reduce(
    (acc, car) => {
      if (car.querySelector(".-make").innerText.toLowerCase() === "ferrari") {
        acc.ferraries.push(car);
      } else {
        acc.otherCars.push(car);
      }
      return acc;
    },
    { ferraries: [], otherCars: [] }
  );

  const vehiclesList = document.querySelector(".vehicles_list");
  const sortedVehicles = document.createElement("div");
  sortedVehicles.classList.add("vehicles_list");
  sortedVehicles.append(...ferraries);
  sortedVehicles.append(...otherCars);

  const auto24Content = document.querySelector("#auto24Content");
  auto24Content.replaceChild(sortedVehicles, vehiclesList);
};

export default function Template() {
  useEffect(() => {
    const root = document.querySelector("#root");
    const script = document.createElement("script");
    const javascriptCode = `
    auto24API.setCallback(window.auto24CarsCallback);
    auto24API.load("80023381ff22186911bc932eff366eab");
`;

    // Create a text node containing the JavaScript code
    const scriptContent = document.createTextNode(javascriptCode);

    // Append the text node to the script element
    script.appendChild(scriptContent);
    const auto24Content = document.querySelector("#auto24Content");
    root.insertBefore(script, auto24Content);
  }, []);

  return (
    <>
      {/* <script>{auto24API.load("80023381ff22186911bc932eff366eab")}</script> */}
      <PreLoader></PreLoader>
      <div id="auto24Content"></div>
    </>
  );
}
