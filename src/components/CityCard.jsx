import { Link } from 'react-router-dom';

function Citycard({ city }) {
  //   const cityImgURL = `${city?.image_url}`;
  const cityImage = {
    backgroundImage: `url("${city?.image_url}")`,
  };

  return (
    <Link
      to={`/properties/${city._id}`}
      style={cityImage}
      className="w-72 h-56 sm:w-96 sm:h-72 rounded-3xl text-white flex justify-center items-center flex-col flex-wrap m-10 backdrop-blur-sm"
    >
      <h4 className="font-semibold text-4xl my-32 mx-auto text-center absolute">
        {city.name}
      </h4>
      <p className="text-center mt-24 text-xl">
        {city.property_count} Properties
      </p>
    </Link>
  );
}

export default Citycard;
