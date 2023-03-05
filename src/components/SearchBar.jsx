import React from 'react';

function Searchbar() {
  return (
    <div className="flex justify-center items-center -mt-16 pb-20">
      <form className="bg-white flex justify-center items-center p-10 rounded-3xl shadow-2md">
        <fieldset>
          <select
            id="city"
            name="city"
            className="border-uni-grey border rounded-xl h-12 text-uni-grey w-80"
          >
            <option value="">Search by city</option>
            <option value="leeds">Leeds</option>
            <option value="Newcastle">Newcastle</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Southhampton">Southhampton</option>
          </select>
          <select
            id="beds"
            name="beds"
            className="ml-6 border-uni-grey border rounded-xl h-12 text-uni-grey w-80"
          >
            <option value="">Any bedroom</option>
            <option value="1">1 bed</option>
            <option value="2">2 beds</option>
            <option value="3">3 beds</option>
            <option value="4">4 beds</option>
          </select>
          <button
            type="button"
            className="text-white bg-uni-purple hover:bg-uni-blue focus:ring-4 focus:ring-uni-gray font-semibold rounded-xl text-sm px-10 py-4 ml-6 h-12 dark:bg-uni-purple dark:hover:bg-uni-blue focus:outline-none dark:focus:ring-uni-grey"
          >
            Find Homes
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Searchbar;
