function Banner({ heading, subheading }) {
  return (
    <div className="bg-banner-img h-96 bg-cover bg-center flex justify-center items-center text-white">
      <div className="absolute m-auto text-center">
        <h1 className="text-6xl">{heading}</h1>
        <p className="text-2xl mt-6">{subheading}</p>
      </div>
    </div>
  );
}

export default Banner;
