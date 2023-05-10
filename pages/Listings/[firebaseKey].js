import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { getSingleListing } from '../../api/listingData';

export default function ViewListing() {
  const [listingDetails, setListingDetails] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleListing(firebaseKey).then((details) => {
      if (details) {
        setListingDetails(details);
      }
    });
  }, [firebaseKey]);

  console.warn(listingDetails);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <img src={listingDetails.imageUrl} alt={listingDetails.title} style={{ width: '300px' }} />
      </div>
      <div className="text-black ms-5 details">
        <h3>{listingDetails.title}</h3>
        <h5>${listingDetails.pricePerNight}</h5>
        <p>{listingDetails.beds} Beds </p>
        <p>{listingDetails.baths} Baths</p>
        <p>{listingDetails.location}</p>
        <p>{listingDetails.propertyType}</p>
        <p>{listingDetails.amenities}</p>
        <p>{listingDetails?.description || ''}</p>
        <hr />
      </div>
    </div>
  );
}
