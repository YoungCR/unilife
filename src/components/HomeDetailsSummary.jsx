import { AiOutlineHeart } from 'react-icons/ai';
import { MdOutlineKingBed, MdOutlineBathtub } from 'react-icons/md';
import bathIcon from '../assets/bath.svg';

function HomeDetailsSummary({ propertyDetails }) {
  return (
    <div className="flex flex-col">
      <div className="w-[620px] h-[484px] rounded-3xl flex items-center flex-col p-10 border border-uni-grey">
        <div className="flex flex-col items-center">
          <h3 className="text-4xl font-normal leading-10">
            {propertyDetails?.address.street}
          </h3>
          <h3 className="text-4xl font-normal leading-10 mt-1">
            {propertyDetails?.address.city}, {propertyDetails?.address.postcode}
          </h3>
        </div>
        <div className="bg-uni-grey h-[1px] w-[540px] mt-10 mb-12" />
        <div className="grid grid-cols-3 gap-7">
          <div className="w-[160px] h-[88px] flex flex-col items-center justify-between">
            <p>Bedrooms</p>
            <div className="flex mt-4">
              <MdOutlineKingBed className="w-8 h-8 fill-uni-purple" />
              <p className="text-4xl font-bold text-uni-purple ml-5">
                {propertyDetails?.bedroom_count}
              </p>
            </div>
          </div>
          <div className="w-[160px] h-[88px] flex flex-col items-center justify-between">
            <p>Bathrooms</p>
            <div className="flex mt-4">
              <MdOutlineBathtub className="w-8 h-8 fill-uni-purple" />
              <p className="text-4xl font-bold text-uni-purple ml-5">
                {propertyDetails?.bathroom_count}
              </p>
            </div>
          </div>
          <div className="w-[160px] h-[88px] flex flex-col items-center justify-between">
            <p>Property Type</p>
            <p className="text-2xl font-bold text-uni-purple mt-4">
              {propertyDetails?.property_type}
            </p>
          </div>
          <div className="w-[160px] h-[88px] flex flex-col items-center justify-between">
            <p>Price</p>
            <p className="text-4xl font-bold text-uni-purple mt-4">
              €{propertyDetails?.rent}
            </p>
          </div>
          <div className="w-[160px] h-[88px] flex flex-col items-center justify-between">
            <p>Furnished Type</p>
            <p className="text-2xl font-bold text-uni-purple mt-4">
              {propertyDetails?.furnished}
            </p>
          </div>
          <div className="w-[160px] h-[88px] flex flex-col items-center justify-between">
            <p>Available from</p>
            <p className="text-2xl font-bold text-uni-purple mt-4">
              {propertyDetails?.availability}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button
          type="button"
          className="border border-uni-grey hover:bg-uni-blue focus:ring-4 focus:ring-uni-gray font-semibold rounded-xl text-sm h-12 w-[298px] text-center mb-20 flex justify-center items-center"
        >
          <AiOutlineHeart className="mr-2.5" />
          Shortlist
        </button>
        <button
          type="button"
          className="text-white bg-uni-purple hover:bg-uni-blue focus:ring-4 focus:ring-uni-gray font-semibold rounded-xl text-sm h-12 w-[298px] dark:bg-uni-purple dark:hover:bg-uni-blue focus:outline-none dark:focus:ring-uni-grey text-center mb-20"
        >
          Book Viewing
        </button>
      </div>
    </div>
  );
}

export default HomeDetailsSummary;
