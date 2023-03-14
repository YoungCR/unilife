import { Link } from 'react-router-dom';
import bedIcon from '../assets/bed.svg';
import bathIcon from '../assets/bath.svg';
import addressPinIcon from '../assets/addressPin.svg';
import homeIcon from '../assets/home.svg';

function PropertyCard({ property }) {
  return (
    <div className="w-96 rounded-3xl flex justify-center items-center flex-col m-10 border border-uni-grey">
      <img
        src={property.images[0]}
        alt="Property"
        className="rounded-t-3xl h-64"
      />
      <div className="bg-uni-purple w-full h-20 flex justify-between py-4 px-6 text-white">
        <div className="flex flex-col justify-center">
          <p className="text-2xl font-semibold">€{property.rent}</p>
          <p className="text-xs">pppw including bills</p>
        </div>
        <div className="flex items-center">
          <img src={bedIcon} alt="Bed Icon" className="ml-7" />
          <p className="ml-2.5">{property.bedroom_count}</p>
          <img src={bathIcon} alt="Bath Icon" className="ml-7" />
          <p className="ml-2.5">{property.bathroom_count}</p>
        </div>
      </div>
      <div className="w-full p-6 h-28 border border-uni-grey border-x-0 border-t-0">
        <div className=" flex justify-between">
          <p>{property.property_type}</p>
          <p>{property.furnished}</p>
        </div>
        <div className="mt-3 flex items-center">
          <img src={addressPinIcon} alt="Address Pin with Home" />
          <p className="ml-2">
            {property.address.street}, {property.address.city},{' '}
            {property.address.postcode}
          </p>
        </div>
      </div>
      <Link to={`/property/${property._id}`} className="h-12 flex items-center">
        <img src={homeIcon} alt="Home Icon" />
        <p className="ml-3">View Home</p>
      </Link>
    </div>
  );
}

export default PropertyCard;
