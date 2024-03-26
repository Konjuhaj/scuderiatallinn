export default function CarDetails(carDetails) {
  const car = carDetails.carDetails;
  console.log(car);
  if (!car || Object.keys(car).length === 0) {
    return null; // or return some default JSX
  }

  //   Splitting the equipment string and mapping over each item
  const equipmentItems = car.Equipment.split(/[\t,]+\n?/)
    .filter((item) => item.trim()) // Filter out empty items
    .map((item, index) => (
      <p>
        <span className="p-1" key={index}>
          {item.trim()}
          <br />
        </span>
      </p>
    ));

  return (
    <div className="lg:flex" data-uk-grid="">
      <div className="lg:w-1/3 lg:order-1">
        <div className="p-4">
          <h3 className="font-bold text-xl">{car["Make and model"]}</h3>
          <div style={{ height: "15px", clear: "left" }}></div>
          <ul className="flex flex-col gap-2">
            <li className="flex justify-between">
              Price:
              <span className="self-end">
                <strong>{car["Price"]}€ </strong>
                <br />
                <small>({car["VAT"]} VAT)</small>
              </span>
            </li>
            <li className="flex justify-between">
              Mileage:
              <span className="self-end">{car["Mileage"]} km </span>
            </li>
            <li className="flex justify-between">
              Color:
              <span className="self-end">{car["Color"]} </span>
            </li>
            <li className="flex justify-between">
              First registration date:
              <span className="self-end">{car["First registration"]} </span>
            </li>
            <li className="flex justify-between">
              Fuel:
              <span className="self-end">{car["Fuel"]} </span>
            </li>
            <li className="flex justify-between">
              Average fuel consumption:
              <span className="self-end">{car["Average fuel consumption"]} </span>
            </li>
            <li className="flex justify-between">
              Engine:
              <span className="self-end">{car["Engine"]} </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="lg:w-2/3 lg:order-2">
        <div className="flex flex-col p-4">
          <h3 className="font-bold text-lg">
            Additional information and equipment
          </h3>
          <div className="columns-2">
            {equipmentItems}
          </div>

          <div>
            <hr />
          </div>
          <h4 style={{ marginTop: "2em" }}>Contact</h4>
          <p>
            Torsten Kihlman
            <br />
            {" "} <a href="tel:+37256630469">+372 566 30 469</a>
            <br />
            {" "}
            <a href="mailto:torsten.kihlman@scuderiatallinn.ee">
              torsten.kihlman@scuderiatallinn.ee
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
