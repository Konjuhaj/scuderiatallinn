import Image from './image'

function store() {
  return (
	<div className='flex flex-row justify-center items-center gap-10'>
		<div>
			<Image src="src/assets/Store-2.jpg"
			alt="placeholder"
			customClass="w-full max-h-130 object-cover"></Image>
		</div>
	 <div className='flex flex-col justify-center items-center'>
		<h1 className="font-bold text-2xl uppercase">Visit our showroom</h1>
		<h2 className='font-bold'>Opening hours</h2>
		<div className='text-center text-sm'>
			<p>Mon - Fri: 10:00 - 18:00</p>
			<p>Sat: Closed</p>
			<p>Sun: Closed</p>
			<p>Peterburi tee 50d/1, 11415 Tallinn, Estonia</p>
		</div>
	 </div>
	</div>
  )
}

export default store