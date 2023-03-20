import bannerImg from '../assets/cover-img.png';

function Banner({ heading, subheading }) {
  return (
    <div
      className="h-96 bg-no-repeat bg-cover bg-center flex justify-center items-center text-white"
      style={{
        backgroundImage: `linear-gradient(to right bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bannerImg})`,
      }}
    >
      <div className="absolute m-auto text-center">
        <h1 className="text-6xl">{heading}</h1>
        <p className="text-2xl mt-6">{subheading}</p>
      </div>
    </div>
  );
}

export default Banner;
