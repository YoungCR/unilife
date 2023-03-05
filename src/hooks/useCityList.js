import { useQuery } from '@tanstack/react-query';
import fetchCityList from './fetchCity';

export default function useCityList(city) {
  const results = useQuery(['cities', city], fetchCityList);
  return [results?.data?.cities ?? [], results.status];
}
