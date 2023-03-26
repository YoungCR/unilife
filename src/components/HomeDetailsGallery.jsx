function propertyDetailsDetailsGallery({ propertyDetails }) {
  return (
    <div className="">
      <img
        src={propertyDetails?.images[0]}
        alt={`${propertyDetails?.city_id.name} ${propertyDetails?.propertyDetails_type}`}
        className="h-[400px] w-[620px] rounded-3xl"
      />
      <div className="flex mt-4">
        <img
          src={propertyDetails?.images[1]}
          alt={`${propertyDetails?.city_id.name} ${propertyDetails?.propertyDetails_type}`}
          className="h-[140px] w-[196px] rounded-xl"
        />
        <img
          src={propertyDetails?.images[2]}
          alt={`${propertyDetails?.city_id.name} ${propertyDetails?.propertyDetails_type}`}
          className="h-[140px] w-[196px] rounded-xl mx-4"
        />
        <img
          src={propertyDetails?.images[3]}
          alt={`${propertyDetails?.city_id.name} ${propertyDetails?.propertyDetails_type}`}
          className="h-[140px] w-[196px] rounded-xl"
        />
      </div>
    </div>
  );
}

export default propertyDetailsDetailsGallery;
