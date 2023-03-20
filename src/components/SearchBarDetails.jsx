function SearchBarDetails() {
  return (
    <div className="flex justify-center items-center -mt-20 pb-20">
      <form className="bg-white flex justify-center items-center pl-4 pr-10 py-10 rounded-3xl shadow-2md">
        <fieldset className="flex">
          <div className="flex flex-col ml-6">
            <label htmlFor="minBeds" className="mb-2 text-2xl font-medium">
              Min Bedroom
            </label>
            <select
              id="minBeds"
              name="minBeds"
              className=" border-uni-grey border rounded-xl h-12 text-uni-grey w-72"
            >
              <option value="">Any bedroom</option>
              <option value="1">1 bed</option>
              <option value="2">2 beds</option>
              <option value="3">3 beds</option>
              <option value="4">4 beds</option>
            </select>
          </div>
          <div className="flex flex-col ml-6">
            <label htmlFor="minBaths" className="mb-2 text-2xl font-medium">
              Min Baths
            </label>
            <select
              id="minBaths"
              name="minBaths"
              className=" border-uni-grey border rounded-xl h-12 text-uni-grey w-72"
            >
              <option value="">Any bathroom</option>
              <option value="1">1 bath</option>
              <option value="2">2 baths</option>
              <option value="3">3 baths</option>
              <option value="4">4 baths</option>
            </select>
          </div>
          <div className="flex flex-col ml-6">
            <label htmlFor="maxPrice" className="mb-2 text-2xl font-medium">
              Max Price
            </label>
            <select
              id="maxPrice"
              name="maxPrice"
              className=" border-uni-grey border rounded-xl h-12 text-uni-grey w-72"
            >
              <option value="">Any price</option>
              <option value="1">under 1000</option>
              <option value="2">under 1500</option>
              <option value="3">under 2000</option>
              <option value="4">under 3000</option>
            </select>
          </div>
          <div className="flex flex-col ml-6">
            <label htmlFor="homeType" className="mb-2 text-2xl font-medium">
              Home Type
            </label>
            <select
              id="homeType"
              name="homeType"
              className=" border-uni-grey border rounded-xl h-12 text-uni-grey w-72"
            >
              <option value="">Any type</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Apartment">Apartment</option>
            </select>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default SearchBarDetails;
