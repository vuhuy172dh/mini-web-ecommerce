function Overview({
  images,
  visible,
  onClick,
}: {
  images: string[];
  visible: boolean;
  onClick: (index: number) => void;
}) {
  return (
    <div
      className={`w-72 h-20 p-2 pb-0 bg-black/50 backdrop-blur-xl rounded-xl shadow-lg shadow-black/60 fixed bottom-0 left-1/4 -translate-x-1/2 flex gap-2 justify-center ${
        visible ? 'translate-y-0 z-30' : 'translate-y-full'
      } transition-all duration-300`}
    >
      {images.map((img, index) => (
        <div
          className="h-full w-full flex rounded-lg overflow-hidden cursor-pointer"
          key={index}
          onClick={() => onClick(index)}
        >
          <img
            src={img}
            alt={index.toString()}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default Overview;
