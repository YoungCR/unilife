const fetchProperty = async ({ queryKey }) => {
  const BASEURL = import.meta.env.VITE_UNILIFE_APP_BASE_URL;
  const id = queryKey[1];

  const apiRes = await fetch(`${BASEURL}/properties`);

  if (!apiRes.ok) {
    throw new Error(`properties/${id} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchProperty;
