const NUM_OF_PHOTOS = 10;

export default async function Photos() {
  return (
    <div className="flex flex-col gap-4 w-80 sm:w-full my-4 lg:w-1/2">
      <h1 className="text-xl sm:text-2xl md:text-4xl font-bold tracking-tighter">
        Photos
      </h1>
      {Array.from({ length: NUM_OF_PHOTOS }).map((_, index) => (
        <img
          key={index}
          src={`/images/photos/${index + 1}.jpg`}
          alt={`Photo ${index + 1}`}
          className="w-full"
        />
      ))}
    </div>
  );
}
