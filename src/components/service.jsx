function service() {
	return (
		<>
			<div className="flex flex-col justify-center text-center my-10 lg:my-20">
				<h1 className="font-bold text-2xl uppercase ">WHAT SCUDERIA TALLINN OFFERS</h1>
				<div className="flex lg:flex-row flex-col w-full justify-center items-center lg:items-start lg:gap-24 gap-10 lg:mt-10 p-10">
					<div className="lg:w-1/5 w-full sm:w-4/5">
						<h2 className="font-bold">PRE-OWNED FERRARI'S</h2>
						<p className="mt-2">With the longest experience with Ferrari's in Estonia we are able
							to provide the most customized and knowlegable service, weather you are buying
							or selling a Ferrari.</p>
					</div>
					<div className="lg:w-1/5 w-full sm:w-4/5">
						<h2 className="font-bold">NEW FERRARI'S</h2>
						<p className="mt-2">We offer you the possibility to order any new Ferrari model currently on sale through our
							Official Ferrari Dealer partnership. Our fully equpped Atelier allows
							for an easy and comfortable configuration experience of your new car in our showroom.</p>
					</div>
					<div className="lg:w-1/5 w-full sm:w-4/5">
						<h2 className="font-bold">FERRARI SERVICE</h2>
						<p className="mt-2">You can turn to us with any of your Service and Repair related questions about your Ferrari,
							and we'll assist with having your car serviced at an Official Ferrari Service.
							Our own Workshop in Estonia will open soon.</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default service;