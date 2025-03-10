import { motion } from "framer-motion";
import { useEffect } from "react";
import PreLoader from "../components/preLoader";

window.auto24CarsCallback = () => {

  const financeElements = document.querySelectorAll(".dataCell__finance, .vehicles_list_price_cell");
  financeElements.forEach(element => {
    element.innerHTML = element.innerHTML.replace(/\bincludes\b/g, '');

    // add space between the number and the currency
    if (element.innerHTML.includes("EUR")) {
      const regex = /(EUR)(\d{1,3}(?:,\d{3})*(?:\.\d+)?)/;
      element.innerHTML = element.innerHTML.replace(regex, (match, p1, p2) => {
        return `${p2}€`;
      });
    }
    if (element.innerHTML.includes("VAT 0%")) {
      element.innerHTML = 'Margin scheme';
    }
  });

  const vehicleYear = document.querySelectorAll(".dataCell__firstreg")
  vehicleYear.forEach(element => {
    // remove "yr." from the string
    element.innerHTML = element.innerHTML.replace(/yr\./g, '·');
  }
  );

  const mileageElements = document.querySelectorAll("span.-mileage");
  mileageElements.forEach(element => {
    // Remove "mileage:" from the string
    element.innerHTML = element.innerHTML.replace(/mileage:/g, '');
  });


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
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }} id="auto24Content"></motion.div>
    </>
  );
}
