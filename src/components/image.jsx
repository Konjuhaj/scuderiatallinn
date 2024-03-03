function image({ src, alt, customClass }) {
	return (
		<>
			<img src={src} alt={alt} className={customClass} />
		</>
	);
}

export default image;
