import React from 'react';
import Events from '../components/events';
import PreLoader from '../components/preLoader';

function allEvents() {

	const [contentHeight, setContentHeight] = React.useState('auto');

	React.useEffect(() => {
		const calculateContentHeight = () => {
			const navbarHeight = document.querySelector('#navbar').clientHeight;
			const footerHeight = document.querySelector('#footer').clientHeight;
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
		<>
			<PreLoader />
			<div className=''
				style={{ minHeight: contentHeight }}>
				<Events />
			</div >
		</>
	);
}

export default allEvents;