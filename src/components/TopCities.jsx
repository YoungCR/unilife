import { useEffect, useState } from 'react';
import axios from 'axios';
import CityCard from './CityCard';

function TopCities() {
  const BASEURL = import.meta.env.VITE_UNILIFE_APP_BASE_URL;
  // what is the endpoint
  // Url = ${baseUrl}cities

  // create state to hold top cities
  const [topCities, setTopCities] = useState([]);

  useEffect(() => {
    // call the api
    axios
      .get(`${BASEURL}/cities`)
      .then((res) => {
        console.log(res.data.response);
        // store data in state
        setTopCities(res.data.response.slice(0, 9));
      })
      .catch((err) => console.log(err));
  }, [BASEURL]);

  return (
    <div className="flex flex-wrap flex-col justify-center items-center">
      <h2 className="font-medium text-4xl text-center">
        Student accommodations in our top cities
      </h2>
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-12 mx-20">
        {/* <div className=""> */}
        {topCities.map((item) => (
          <CityCard key={item._id} city={item} />
        ))}
      </div>
      <button
        type="button"
        className="text-white bg-uni-purple hover:bg-uni-blue focus:ring-4 focus:ring-uni-gray font-semibold rounded-xl text-sm px-10 py-4 ml-6 h-12 dark:bg-uni-purple dark:hover:bg-uni-blue focus:outline-none dark:focus:ring-uni-grey text-center"
      >
        See All Cities
      </button>
    </div>
  );
}

export default TopCities;
