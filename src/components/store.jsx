import Image from "./image";

function store() {
  return (
    <div
      id="showroom"
      className="flex lg:flex-row flex-col w-full justify-between items-center gap-10 bg-slate-50"
    >
      <div className="lg:w-1/2">
        <Image
          src="src/assets/Store-2.jpg"
          alt="placeholder"
          customClass="w-full max-h-130 object-cover"
        ></Image>
      </div>
      <div className="flex flex-col justify-center items-center w-1/2">
        <h1 className="font-bold text-2xl uppercase text-center">
          Visit our showroom
        </h1>
        <h2 className="font-bold mt-4">Opening hours</h2>
        <div className="text-center text-sm mt-2">
          <p>Mon - Fri: 10:00 - 18:00</p>
          <p>Sat: Closed</p>
          <p>Sun: Closed</p>
        </div>
        <h2 className="font-bold text-sm mt-4 mb-10 text-center">
          Peterburi tee 50d/1, 11415 Tallinn, Estonia
        </h2>
      </div>
    </div>
  );
}

export default store;
