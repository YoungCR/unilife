import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import fetchCities from '../hooks/fetchCities';

const Topcities = () => {
  const BASEURL = process.env.UNILIFE_APP_BASE_URL;
  const { cityName } = useParams();

  const [topCities, setTopCities] = useState;
  return (
    <div>
      <h2>Student accommodations in our top cities</h2>
    </div>
  );
};

export default Topcities;
