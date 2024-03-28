export default function CarDetails(carDetails) {

  const car = carDetails.carDetails;

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

      if (tagName === 'dt') {
        currentKey = textContent.charAt(0).toUpperCase() + textContent.trim().slice(1)
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

    const equipmentPairs = convertEquipmentHTML(car.Equipment);

    return (
      <div className="flex flex-col gap-4">
        {Object.entries(equipmentPairs).map(([category, parts], index) => (
          <div key={index} className="break-inside-avoid">
            <h4 className="font-bold">{category}</h4>
            <div>
              {parts.map((part, idx) => (
                <div key={idx}>{part}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const carInfo = car.Other.split('<br>')
    .flatMap(item => item.split('-').map((part, index) => ({ part: part.trim(), isFirst: index === 0 })))
    .filter(({ part }) => part.trim() && part !== "Demo vehicle")
    .map(({ part, isFirst }, index) => {

      const formattedPart = part.replace(/<\/?b>/g, '').trim(); // Remove <b> and </b> tags
      const capitalizedPart = formattedPart.charAt(0).toUpperCase() + formattedPart.slice(1); // Capitalize the first character

      return (
        <p key={index} className="">
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
          <ul className="mt-2 lg:columns-2 gap-12 [&>li]:py-1">
            <li className="flex justify-between border-b border-gray-200">
              Price:
              <span className="self-end">
                <strong>{car["Price"]}€ </strong>
                <br />
                <small>({car["VAT"]} VAT)</small>
              </span>
            </li>
            {car["Export price"] && (
              <li className="flex justify-between border-b border-gray-200">
                Export price:
                <span className="self-end">
                  <strong>{car["Export price"].toLocaleString()}€ </strong>
                </span>
              </li>
            )}
            <li className="flex justify-between border-b border-gray-200">
              Mileage:
              <span className="self-end">{car["Mileage"]} km </span>
            </li>
            <li className="flex justify-between border-b border-gray-200">
              Color:
              <span className="self-end">{car["Color"]} </span>
            </li>
            <li className="flex justify-between border-b border-gray-200">
              Registration:
              <span className="self-end">{car["First registration"]} </span>
            </li>
            <li className="flex justify-between border-b border-gray-200">
              VIN:
              <span className="self-end">{car["VIN"]} </span>
            </li>
            <li className="flex justify-between border-b border-gray-200">
              Fuel:
              <span className="self-end">{car["Fuel"]} </span>
            </li>
            {car["Average fuel consumption"] && (
              <li className="flex justify-between border-b border-gray-200">
                Avg fuel consumption:
                <span className="self-end">
                  {car["Average fuel consumption"]}{" "}
                </span>
              </li>
            )}
            <li className="flex justify-between border-b border-gray-200">
              Engine:
              <span className="self-end">{car["Engine"]} </span>
            </li>
            <li className="flex justify-between border-b border-gray-200">
              Transmission:
              <span className="self-end">{car["Transmission"]} </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col pt-6">
          <h4 className="font-bold text-lg border-b border-gray-200 py-2">Additional information</h4>
          <div className="py-2">
            {carInfo}
          </div>
          <h4 className="font-bold text-lg  border-b border-gray-200 py-2">Equipment</h4>
          <div className="lg:columns-2 gap-12 py-2">
            {carEquipment({ car })}
          </div>
          <h4 className="text-lg font-bold py-2 border-b border-gray-200">Contact</h4>
          <p className="flex flex-col py-2">
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
