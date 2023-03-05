const BASEURL = process.env.UNILIFE_APP_BASE_URL;

const fetchCityList = async ({ queryKey }) => {
  const city = queryKey[1];

  if (!city) return [];

  const apiRes = await fetch(`${BASEURL}/cities?name=${city}`);

  if (!apiRes.ok) {
    throw new Error(`details/${city} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchCityList;
