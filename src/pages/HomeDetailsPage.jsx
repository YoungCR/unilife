import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { IoIosArrowBack, IoMdCheckmark } from 'react-icons/io';
import HomeDetailsGallery from '../components/HomeDetailsGallery';
import HomeDetailsSummary from '../components/HomeDetailsSummary';

function HomeDetailsPage() {
  const BASEURL = import.meta.env.VITE_UNILIFE_APP_BASE_URL;

  const [propertyDetails, setPropertyDetails] = useState();
  const bedroomPrices = propertyDetails?.bedroom_prices;
  console.log(bedroomPrices);
  // get property id from url
  const { propertyId } = useParams();
  // get property details
  useEffect(() => {
    // call the api to get property data
    axios
      .get(`${BASEURL}/properties/${propertyId}`)
      .then((res) => {
        console.log(res);
        // store data in state
        setPropertyDetails(res.data);
        console.log(res.data);
        console.log(propertyDetails);
        console.log(bedroomPrices);
      })
      .catch((err) => console.log(err));
  }, [BASEURL, propertyId, propertyDetails, bedroomPrices]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex w-[1440px] justify-start px-20 mb-4 mt-14">
        <Link
          to={`/properties/${propertyDetails?.city_id._id}`}
          className="flex items-center"
        >
          <IoIosArrowBack />
          <p className="ml-4">Back to Search</p>
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-2 gap-10 justify-center">
          <HomeDetailsGallery propertyDetails={propertyDetails} />
          <HomeDetailsSummary propertyDetails={propertyDetails} />
          <div className="flex flex-col w-[620px]">
            <h2 className="text-4xl font-medium">Description</h2>
            <p className="mt-6 mr-44">
              {propertyDetails?.property_description}
            </p>
          </div>
          <div className="flex flex-col w-[620px]">
            <h2 className="text-4xl font-medium">Bedroom Prices</h2>
            <div className="rounded-3xl border border-uni-grey pt-6 mt-6">
              {bedroomPrices &&
                Object.values(bedroomPrices).map((item, index) => (
                  <div className="flex justify-between border-b border-uni-grey last:border-b-0 pb-6 mt-6 first:mt-0">
                    <p className="text-xl font-normal pl-6">
                      Bedroom {index + 1}
                    </p>
                    <p className="text-xl font-normal pr-6">€{item} per week</p>
                  </div>
                ))}
            </div>
          </div>
          <div className="flex flex-col w-[620px] mb-32">
            <h2 className="text-4xl font-medium">Key Features</h2>
            {propertyDetails?.key_features.map((item) => (
              <div className="flex items-center mt-6">
                <IoMdCheckmark className="text-xl" />
                <p className="ml-2 text-xl font-normal">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeDetailsPage;
