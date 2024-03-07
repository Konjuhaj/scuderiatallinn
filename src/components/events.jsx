function Events() {
	return (
		<>
			<div
				id="events"
				className="flex flex-col items-center lg:my-24 my-16 gap-12"
			>
				<h1 className="text-2xl font-bold uppercase">Upcoming Events</h1>

				<Event
					image="src\assets\Events.jpg"
					title="Ferrari Event"
					date="1.2.2023"
					location="Lintulahdenkatu 6 As, 29"
					description="This event will be held in tallinn, it is very nice "
				></Event>
			</div>
		</>
	);
}

function Event({ image, title, date, location, description }) {
	return (
		<>
			<div className="flex flex-col lg:flex-row gap-4 bg-slate-50 rounded-2xl w-2/3 max-w-3xl lg:max-h-96 shadow-lg shadow-slate-200/60">
				<div className="h-1/2 lg:w-1/2">
					<img
						className="w-full h-72 max-h-96 lg:w-96 object-cover rounded-t-2xl lg:rounded-r-none lg:rounded-l-2xl "
						src={image}
						alt=""
					/>
				</div>
				<div className="flex flex-col gap-4 p-4 text-md h-1/2 lg:w-1/2">
					<div className="font-bold text-2xl">{title}</div>
					<div className="font-bold ">{date}</div>
					<div className="">{location}</div>
					<div className="text-pretty break-all">{description}</div>
				</div>
			</div>
		</>
	);
}

export default Events;
