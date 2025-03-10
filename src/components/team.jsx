import Image from "./image";

function Team() {
	return (
		<div className="flex flex-col justify-center items-center my-16 px-10">
			<div className="flex flex-col justify-center items-center text-center mb-4">
				<h1 className="text-2xl font-bold uppercase">About our team</h1>
				<h2 className="font-bold mt-4">Committed to Service</h2>
				<div className="w-full sm:w-4/5 lg:w-1/2 mt-6">
					<p>
						Our team has a long experience working with Ferrari. Torsten Kihlman has years of experience selling Ferrari's for an Official Ferrari Dealer. Toni Vilander is an Official Ferrari Brand Ambassador and has been racing professionally with Ferrari for over 15 years, winning 24 Hours of Le Mans twice in the GTE Pro class.
					</p>
				</div>
			</div>
			<div className="flex flex-col sm:flex-row gap-10 text-center mt-6 p-2 text-sm">
				<div className="flex md:flex-row flex-col gap-10">
					<div className="w-52 flex flex-col items-center gap-4">
						<Image
							src="./assets/Kihlman_profile.jpeg"
							alt="Torsten Kihlman"
							customClass="w-36 h-36 rounded-full object-cover"
							loading="lazy"
						></Image>
						<div>
							<h2 className="font-bold mb-1">TORSTEN KIHLMAN</h2>
							<p>Sales Manager/Owner</p>
							<p>+372 566 30 469</p>
							<a href="mailto:torsten.kihlman@scuderiatallinn.ee2" className="">
								torsten.kihlman@scuderiatallinn.ee
							</a>
						</div>
					</div>
					<div className="w-52 flex flex-col items-center gap-4">
						<Image
							src="./assets/Events_2.jpg"
							alt="Jana Nikolajeva"
							customClass="w-36 h-36 rounded-full object-cover"
							loading="lazy"
						></Image>
						<div>
							<h2 className="font-bold mb-1">JANA NIKOLAJEVA</h2>
							<p>Assistant</p>
							<p>+372 566 12 906</p>
							<a href="mailto:jana.nikolajeva@scuderiatallinn.ee" className="">
								jana.nikolajeva@scuderiatallinn.ee
							</a>
						</div>
					</div>
				</div>


				<div className="flex md:flex-row flex-col gap-10">
					<div className="w-52 flex flex-col items-center gap-4">
						<Image
							src="./assets/Vilander_profile-2.jpg"
							alt="Toni Vilander"
							customClass="w-36 h-36 rounded-full object-cover"
							loading="lazy"
						></Image>
						<div>
							<h2 className="font-bold mb-1">TONI VILANDER</h2>
							<p>General Manager/Owner</p>
							<p>+358 50 589 6284</p>
							<a href="mailto:toni.vilander@scuderiatallinn.ee" className="">
								toni.vilander@scuderiatallinn.ee
							</a>
						</div>
					</div>
					{/* <div className="w-52 flex flex-col items-center gap-4">
						<Image
							src="./assets/Events_2.jpg"
							alt="Samuli Hepola"
							customClass="w-36 h-36 rounded-full object-cover"
							loading="lazy"
						></Image>
						<div>
							<h2 className="font-bold mb-1">SAMULI HEPOLA</h2>
							<p>Owner</p>
							<p>+372 564 63 455</p>
							<a href="mailto:samuli.hepola@scuderiatallinn.ee" className="">
								samuli.hepola@scuderiatallinn.ee
							</a>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
}

export default Team;
