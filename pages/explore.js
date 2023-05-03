/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
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
      <Link href="/new" passHref>
        <Button>Add A Listing</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {/* TODO: map over member here using MemberCard component */}
        {listings.map((member) => (
          <ListingCard key={member.firebaseKey} memberObj={member} onUpdate={getAllListings} />
        ))}
      </div>

    </div>
  );
}
