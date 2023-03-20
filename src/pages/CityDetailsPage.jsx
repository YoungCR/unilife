import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import SearchBarDetails from '../components/SearchBarDetails';
import Banner from '../components/Banner';
import studentsImg from '../assets/students.png';

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
      .get(`${BASEURL}/properties/city/${cityId}`)
      .then((res) => {
        console.log(res.data);
        // store data in state
        setPropertyDetails(res.data.response);
      })
      .catch((err) => console.log(err));

    // call api to get city details for student info
    axios
      .get(`${BASEURL}/cities/${cityId}`)
      .then((res) => {
        // console.log(res.data.currentPage)
        console.log(res.data);
        // store data in state
        setCityDetails(res.data.data[0]);
        console.log(res.data.data[0]);
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
        <h2 className="font-medium text-4xl text-center">
          {cityDetails.property_count} Homes in {cityDetails.name}
        </h2>
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
      <div className="bg-uni-bg-grey rounded-3xl flex justify-center items-center m-20 py-10 px-14">
        <div className="flex flex-col w-6/12">
          <h2 className="font-medium text-4xl mt-6 mb-3">
            Being a student in {cityDetails?.name}
          </h2>
          <p className="font-normal text-xl mt-6">
            {cityDetails?.student_life}
          </p>
        </div>
        <img
          src={studentsImg}
          alt="Students sitting on a bench"
          className="w-6/12 h-5/12 ml-20"
        />
      </div>
    </>
  );
}

export default CityDetailsPage;
