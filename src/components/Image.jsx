function Image({ src, className }) {
  return (
    <div className={className}>
      <img src={src} className="w-full h-full object-cover" />
    </div>
  );
}

export default Image;
