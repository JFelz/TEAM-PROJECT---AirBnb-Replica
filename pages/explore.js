/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import ListingCard from '../components/ListingCard';
import { getAllListings } from '../api/listingData';
// import { useAuth } from '../utils/context/authContext';

export default function ViewAllListings() {
  const [listings, setListings] = useState([]);

  const seeAllListings = () => {
    getAllListings().then(setListings);
  };

  useEffect(() => {
    seeAllListings();
  }, []);

  return (
    <div className="text-center my-4">
      <div className="d-flex flex-wrap">
        {/* TODO: map over member here using MemberCard component */}
        {listings.map((listing) => (
          <ListingCard key={listing.firebaseKey} listingObj={listing} onUpdate={seeAllListings} />
        ))}
      </div>

    </div>
  );
}
