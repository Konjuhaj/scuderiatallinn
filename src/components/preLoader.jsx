import { orbit } from 'ldrs';
import { useEffect } from "react";
import { preLoaderAnim } from "../animations/animations";



const PreLoader = () => {

	useEffect(() => {
		preLoaderAnim()
	}, []);

	orbit.register()

	return (
		<>
			<div className="preloader w-full h-screen bg-white flex justify-center items-center">
				<div className=''>
					<l-orbit
						size="35"
						speed="1.5"
						color="black"
					></l-orbit>
				</div>
			</div>
		</>
	);

}

export default PreLoader;