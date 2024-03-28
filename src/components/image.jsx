function image({ src, alt, customClass, loading }) {
	return (
		<>
			<img src={src} alt={alt} className={customClass} loading={loading} />
		</>
	);
}

export default image;
