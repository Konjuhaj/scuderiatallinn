export default function CarDetails(carDetails) {
  const car = carDetails.carDetails;
  console.log(car);
  if (!car || Object.keys(car).length === 0) {
    return null; // or return some default JSX
  }

  // Splitting the equipment string and mapping over each item
  if (!car.Equipment) {
    car.Equipment = "No additional equipment";
  }

  const convertEquipmentHTML = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    const equipmentPairs = {};
    let currentKey = null;

    Array.from(doc.querySelectorAll('dt, dd')).forEach((item, index) => {
      const tagName = item.tagName.toLowerCase();
      const textContent = item.textContent.trim();

      console.log(tagName, textContent);

      if (tagName === 'dt') {
        currentKey = textContent.charAt(0).toUpperCase() + part.trim().slice(1);
      } else if (tagName === 'dd') {
        if (currentKey) {
          const parts = textContent.split(/,(?![^()]*\))/);
          const trimmedParts = parts.map(part => part.trim().charAt(0).toUpperCase() + part.trim().slice(1));
          equipmentPairs[currentKey] = trimmedParts.map(part => <p>{part}</p>);
          currentKey = null; // Reset the current key
        }
      }
    });

    return equipmentPairs;
  };

  const carEquipment = ({ car }) => {
    console.log(car.Equipment)
    const equipmentPairs = convertEquipmentHTML(car.Equipment);
    console.log(equipmentPairs);
    // return (
    //   <div>
    //     {Object.entries(equipmentPairs).map(([category, parts], index) => (
    //       <div key={index} className="break-inside-avoid">
    //         <h4 className="font-bold">{category}</h4>
    //         <div>
    //           {parts.map((part, idx) => (
    //             <div key={idx}>{part}</div>
    //           ))}
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // );
  };


  // const equipmentItems = car.Equipment.split(/,(?![^()]*\))/)
  //   .filter((item) => item.trim()) // Filter out empty items
  //   .map((item, index) => (
  //     <p className="py-1">
  //       <span key={index}>
  //         {item.trim()}
  //         <br />
  //       </span>
  //     </p>
  //   ));

  const carInfo = car.Other.split('<br>')
    .flatMap(item => item.split('-').map((part, index) => ({ part: part.trim(), isFirst: index === 0 })))
    .filter(({ part }) => part.trim() && part !== "Demo vehicle")
    .map(({ part, isFirst }, index) => {
      const formattedPart = part.replace(/<\/?b>/g, '').trim(); // Remove <b> and </b> tags
      const capitalizedPart = formattedPart.charAt(0).toUpperCase() + formattedPart.slice(1); // Capitalize the first character
      return (
        <p key={index} className="py-1">
          <span>
            {isFirst ? '' : '- '}{capitalizedPart}
            <br />
          </span>
        </p>
      );
    });

  return (
    <div className="lg:w-3/5 mx-auto p-4 lg:p-0" data-uk-grid="">
      <div className="w-full">
        <div className="pt-6">
          <h3 className="font-bold text-xl">{car["Make and model"]}</h3>
          <div className="mt-2"></div>
          <ul className="columns-1 lg:columns-2 gap-12 [&>li]:p-1">
            <li className="flex justify-between border-b-1 border-gray-200 pb-2">
              Price:
              <span className="self-end">
                <strong>{car["Price"]}€ </strong>
                <br />
                <small>({car["VAT"]} VAT)</small>
              </span>
            </li>
            {car["Export price"] && (
              <li className="flex justify-between border-b-1 border-gray-200 pb-2">
                Export price:
                <span className="self-end">
                  <strong>{car["Export price"]}€ </strong>
                </span>
              </li>
            )}
            <li className="flex justify-between border-b-1 border-gray-200 pb-2">
              Mileage:
              <span className="self-end">{car["Mileage"]} km </span>
            </li>
            <li className="flex justify-between border-b-1 border-gray-200 pb-2">
              Color:
              <span className="self-end">{car["Color"]} </span>
            </li>
            <li className="flex justify-between border-b-1 border-gray-200 pb-2">
              Registration:
              <span className="self-end">{car["First registration"]} </span>
            </li>
            <li className="flex justify-between border-b-1 border-gray-200 pb-2">
              VIN:
              <span className="self-end">{car["VIN"]} </span>
            </li>
            <li className="flex justify-between border-b-1 border-gray-200 pb-2">
              Fuel:
              <span className="self-end">{car["Fuel"]} </span>
            </li>
            <li className="flex justify-between border-b-1 border-gray-200 pb-2">
              Avg fuel consumption:
              <span className="self-end">
                {car["Average fuel consumption"]}{" "}
              </span>
            </li>
            <li className="flex justify-between border-b-1 border-gray-200 pb-2">
              Engine:
              <span className="self-end">{car["Engine"]} </span>
            </li>
            <li className="flex justify-between">
              Transmission:
              <span className="self-end">{car["Transmission"]} </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col pt-6">
          <div className="mt-2"></div>
          <div>
            <h4 className="font-bold border-b-1 border-gray-200 pb-2">Additional information</h4>
            <div className="text-sm lg:text-md mb-2">
              {carInfo}
            </div>
          </div>
          <h4 className="font-bold border-b-1 border-gray-200 pb-2">Equipment</h4>
          <div className="lg:columns-2 text-sm lg:text-md border-b-1 border-gray-200 pb-2">
            {carEquipment({ car })}
          </div>
          <h4 className="mt-2">Contact</h4>
          <p className="flex flex-col">
            Torsten Kihlman
            <br /> <a href="tel:+37256630469">+372 566 30 469</a>
            <br />{" "}
            <a href="mailto:torsten.kihlman@scuderiatallinn.ee">
              torsten.kihlman@scuderiatallinn.ee
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
