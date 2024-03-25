import { orbit } from 'ldrs';
import { useEffect } from "react";
import { preLoaderAnim } from "../animations/animations";



const PreLoader = () => {

	useEffect(() => {
		window.scrollTo(0, 0);
		preLoaderAnim()
	}, []);

	orbit.register()

	return (
		<>
			<div className="preloader w-full h-screen bg-white flex justify-center items-center">
				<div className='loader'>
					<span>
						<l-orbit
							size="35"
							speed="1.5"
							color="black"
						></l-orbit>
					</span>
				</div>
			</div>
		</>
	);

}

export default PreLoader;