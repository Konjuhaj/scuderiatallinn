export default function CarDetails(carDetails) {
  const car = carDetails.carDetails;
  console.log(car);

  //   Splitting the equipment string and mapping over each item
  const equipmentItems = car.Equipment.split(/[\t,]+\n?/)
    .filter((item) => item.trim()) // Filter out empty items
    .map((item, index) => (
      <span className="p-1" key={index}>
        {item.trim()}
        <br />
      </span>
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
              First registration date:
              <span className="self-end">{car["First registration"]} </span>
            </li>
            <li className="flex justify-between">
              Axle:
              <span className="self-end">{car["Axle"]} </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="lg:w-2/3 lg:order-2">
        <div className="flex flex-col p-4">
          <h3 className="font-bold text-lg">
            Additional information and equipment
          </h3>
          {equipmentItems}

          <div className="uk-container">
            <hr />
          </div>
          <p>
            <i className="ion-information-circled"></i> the correctness of the
            information and the stock situation must always be ensured from the
            seller. Location-specific delivery costs can be added to the prices.
            We also serve you with professionalism in all matters related to
            financing.
          </p>
          <h4 style={{ marginTop: "2em" }}>Contact us</h4>
          <p>
            Mr. Torsten Kihlman
            <br />
            Sales Executive
            <br />
            M. <a href="tel:+37256630469">+372 566 30 469</a>
            <br />
            E.{" "}
            <a href="mailto:torsten.kihlman@scuderiatallinn.ee">
              torsten.kihlman@scuderiatallinn.ee
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}