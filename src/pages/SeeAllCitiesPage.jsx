import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';

function SeeAllCitiesPage() {
  const BASEURL = import.meta.env.VITE_UNILIFE_APP_BASE_URL;
  // what is the endpoint
  // Url = ${baseUrl}cities

  // create state to hold top cities
  const [allCities, setAllCities] = useState([]);
  //   const [currentPage, setCurrentPage] = React.useState([])

  useEffect(() => {
    // call the api
    axios
      .get(`${BASEURL}/cities?limit=20`)
      .then((res) => {
        // console.log(res.data.currentPage)
        console.log(res.data.response);
        // store data in state
        setAllCities(res.data.response);
        //   setCurrentPage(res.data.currentPage)
      })
      .catch((err) => console.log(err));
  }, [BASEURL]);

  return (
    <>
      <Banner
        heading="Find student homes with bills included"
        subheading="A simple and faster way to search for student accommodation"
      />
      <div className="flex flex-wrap flex-col justify-center items-center mt-20">
        <h2 className="font-medium text-4xl text-center">
          Student accommodations in our top cities
        </h2>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10 mb-28 mx-20">
          {!allCities.length ? (
            <h1>No Cities Found</h1>
          ) : (
            allCities.map((city) => (
              <Link
                key={city._id}
                to={`/properties/${city._id}`}
                className="border-uni-grey border rounded-xl h-24 w-80 hover:bg-uni-purple hover:text-white font-semibold text-2xl flex justify-center items-center"
              >
                {city.name}
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default SeeAllCitiesPage;
