function image({ src, alt, customClass }) {
  return (
	<div>
		<img src={src} alt={alt} className={customClass} />
	</div>
  );
}

export default image;
