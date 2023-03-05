import React from 'react';
import Banner from '../components/Banner';
import InfoCard from '../components/InfoCard';
import Searchbar from '../components/SearchBar';
import TopCities from '../components/TopCities';
import searchSVG from '../assets/search.svg';
import compareSVG from '../assets/compare.svg';
import billsSVG from '../assets/bills.svg';
import userComparePNG from '../assets/compareUser.png';
import selectionSVG from '../assets/selection.svg';
import heartSVG from '../assets/heart.svg';

function Homepage() {
  return (
    <>
      <Banner
        heading="Find student homes with bills included"
        subheading="A simple and faster way to search for student accommodation"
      />
      <Searchbar />
      <TopCities />
      <div className="bg-uni-bg-grey rounded-3xl flex justify-center items-center flex-col m-20 py-10 px-14">
        <h2 className="font-medium text-4xl mt-10 mb-3">
          Compare all inclusive student homes
        </h2>
        <div className="flex justify-center items-center">
          <InfoCard
            cardImgSrc={searchSVG}
            cardImgAlt="Search Icon"
            cardTitle="Search"
            cardText="Find your dream home in the perfect area near your university"
          />
          <InfoCard
            cardImgSrc={compareSVG}
            cardImgAlt="Compare Icon"
            cardTitle="Compare"
            cardText="Compare student accommodation to find the right home for you"
          />
          <InfoCard
            cardImgSrc={billsSVG}
            cardImgAlt="Bills Icon"
            cardTitle="Bills Included"
            cardText="Bills are included in all rent prices. No hidden fees."
          />
        </div>
      </div>
      <div className="flex mt-28 mx-40 justify-between">
        <div className="flex justify-center flex-col">
          <div className="flex justify-center items-start mb-10">
            <img src={selectionSVG} alt="Hand holding house icon" />
            <div className="ml-8">
              <h4 className="text-3xl font-medium mb-3">Best selection</h4>
              <p className="font-normal text-xl w-96">
                Best selection of student accommodations. Never been easier to
                find a home that's right for you.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-start mb-10">
            <img src={heartSVG} alt="Heart icon" />
            <div className="ml-8">
              <h4 className="text-3xl font-medium mb-3">Your favorite</h4>
              <p className="font-normal text-xl w-96">
                Shortlist your favorite properties and send enquiries in one
                click.
              </p>
            </div>
          </div>
          <button
            type="button"
            className="text-white bg-uni-purple hover:bg-uni-blue focus:ring-4 focus:ring-uni-gray font-semibold rounded-xl text-sm px-10 py-4 ml-6 h-12 dark:bg-uni-purple dark:hover:bg-uni-blue focus:outline-none dark:focus:ring-uni-grey text-center mb-20"
          >
            Search & Compare
          </button>
        </div>
        <div>
          <img src={userComparePNG} alt="Person using a smart phone" />
        </div>
      </div>
    </>
  );
}

export default Homepage;
