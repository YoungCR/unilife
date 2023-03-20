import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import SearchBarDetails from '../components/SearchBarDetails';
import Banner from '../components/Banner';

function CityDetailsPage() {
  const BASEURL = import.meta.env.VITE_UNILIFE_APP_BASE_URL;
  // what is the endpoint
  // Url = ${baseUrl}cities

  // create state to hold top cities
  const [cityDetails, setCityDetails] = useState([]);
  const [propertyDetails, setPropertyDetails] = useState([]);

  const { cityId } = useParams();
  // console.log(cityId);

  useEffect(() => {
    // call the api to get property data
    axios
      .get(`${BASEURL}/properties`)
      .then((res) => {
        console.log(res.data);
        // store data in state
        setPropertyDetails(res.data.data);
      })
      .catch((err) => console.log(err));

    // call api to get city details for student info
    axios
      .get(`${BASEURL}/cities/${cityId}`)
      .then((res) => {
        // console.log(res.data.currentPage)
        console.log(res.data);
        // store data in state
        setCityDetails(res.data);
        //   setCurrentPage(res.data.currentPage)
      })
      .catch((err) => console.log(err));
  }, [BASEURL, cityId]);

  return (
    <>
      <Banner
        heading="Search Accommodation"
        subheading="Whatever you’re after, we can help you find the right student accommodation for you. "
      />
      <SearchBarDetails />
      <div className="flex flex-wrap flex-col justify-center items-center">
        <h2 className="font-medium text-4xl text-center">6 Homes in Leeds</h2>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-12 mx-20">
          {propertyDetails.map((item) => (
            <PropertyCard key={item._id} property={item} />
          ))}
        </div>
        <Link
          to="/cities"
          className="text-white bg-uni-purple hover:bg-uni-blue focus:ring-4 focus:ring-uni-gray font-semibold rounded-xl text-sm px-10 py-4 ml-6 h-12 dark:bg-uni-purple dark:hover:bg-uni-blue focus:outline-none dark:focus:ring-uni-grey text-center"
        >
          See All Cities
        </Link>
      </div>
      <div className="bg-uni-bg-grey rounded-3xl flex justify-center items-center flex-col m-20 py-10 px-14">
        <div>
          <h2 className="font-medium text-4xl mt-10 mb-3">
            Being a student in {cityDetails?.name}
          </h2>
          <p className="font-normal text-xl">
            Leeds is a lively and multicultural city with a large student
            population. It is quite a compact city, so it is easy to get around
            and has a community feel. Leeds is the perfect mix of city and town
            life and has something to offer to anyone who calls it home. Leeds
            is home to three universities, the University of Leeds, Leeds
            Trinity University and Leeds Beckett University
          </p>
        </div>
      </div>
    </>
  );
}

export default CityDetailsPage;
