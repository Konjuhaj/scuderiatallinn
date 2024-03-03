import Image from "./image";

function team() {
  return (
	<div className="flex flex-col justify-center items-center my-10">
	  <h1 className="text-2xl font-bold uppercase mt-2">Team</h1>
	  <div className="flex flex-col lg:flex-row gap-10 text-center mt-6 p-2">
	  	<div className="flex flex-col items-center gap-4">
			<Image
			src="./src/assets/Kihlman_profile.jpeg"
			alt="Torsten Kihlman"
			customClass="w-40 h-40 rounded-full object-cover"
			></Image>
			<div>
				<h2 className="font-bold">TORSTEN KIHLMAN</h2>
				<p>General Manager</p>
				<p>+372 566 30 469</p>
				<a href="mailto:torsten.kihlman@scuderiatallinn.ee2" className="">torsten.kihlman@scuderiatallinn.ee</a>
			</div>
		  </div>
		  <div className="flex flex-col items-center gap-4">
			<Image
			src="./src/assets/Events_2.jpg"
			alt="Jana Nikolajeva"
			customClass="w-40 h-40 rounded-full object-cover"></Image>
			<div>
				<h2 className="font-bold">JANA NIKOLAJEVA</h2>
				<p>Assistant</p>
				<p>+372 566 12 906</p>
				<a href="mailto:jana.nikolajeva@scuderiatallinn.ee" className="">jana.nikolajeva@scuderiatallinn.ee</a>
			</div>
		  </div>
		  <div className="flex flex-col items-center gap-4">
			<Image
			src="./src/assets/Events_2.jpg"
			alt="Toni Vilander"
			customClass="w-40 h-40 rounded-full object-cover"></Image>
			<div>
				<h2 className="font-bold">TONI VILANDER</h2>
				<p>Owner</p>
				<p>+358 50 589 6284</p>
				<a href="mailto:toni.vilander@scuderiatallinn.ee" className="">toni.vilander@scuderiatallinn.ee</a>
			</div>
		  </div>
		  <div className="flex flex-col items-center gap-4">
			<Image
			src="./src/assets/Events_2.jpg"
			alt="Samuli Hepola"
			customClass="w-40 h-40 rounded-full object-cover"></Image>
			<div>
				<h2 className="font-bold">SAMULI HEPOLA</h2>
				<p>Owner</p>
				<p>+372 564 63 455</p>
				<a href="mailto:samuli.hepola@scuderiatallinn.ee" className="">samuli.hepola@scuderiatallinn.ee</a>
			</div>
		  </div>
	  </div>
	</div>
  );
}

export default team;