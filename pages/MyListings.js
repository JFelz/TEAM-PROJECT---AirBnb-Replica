/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import ListingCard from '../components/ListingCard';
import { getUserListings } from '../api/listingData';
import { useAuth } from '../utils/context/authContext';

export default function ViewUserListings() {
  const [listings, setListings] = useState([]);
  const { user } = useAuth();

  const seeUserListings = () => {
    getUserListings(user.uid).then(setListings);
  };

  useEffect(() => {
    seeUserListings();
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/Listings/New" passHref>
        <Button>Add A Listing</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {/* TODO: map over member here using MemberCard component */}
        {listings.map((listing) => (
          <ListingCard key={listing.firebaseKey} listingObj={listing} onUpdate={seeUserListings} />
        ))}
      </div>

    </div>
  );
}
