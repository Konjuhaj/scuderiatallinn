import React from "react";

function pagenotfound() {
	const [contentHeight, setContentHeight] = React.useState('auto');

	React.useEffect(() => {
		const calculateContentHeight = () => {
			const navbarHeight = document.querySelector('#navbar').clientHeight; // Replace '.navbar' with your Navbar's class or ID
			const footerHeight = document.querySelector('#footer').clientHeight; // Replace '.footer' with your Footer's class or ID
			const newHeight = `calc(100vh - ${navbarHeight}px - ${footerHeight}px)`;
			setContentHeight(newHeight);
		};

		// Calculate height on mount
		calculateContentHeight();

		// Add resize event listener
		window.addEventListener('resize', calculateContentHeight);

		// Cleanup
		return () => window.removeEventListener('resize', calculateContentHeight);
	}, []);

	return (
		<div className="flex flex-col justify-center items-center gap-2 w-full"
			style={{ height: contentHeight }}>
			<h1 className="text-6xl font-bold">404</h1>
			<h1 className="text-2xl font-bold">Page Not Found.</h1>
		</div>
	);
}

export default pagenotfound;