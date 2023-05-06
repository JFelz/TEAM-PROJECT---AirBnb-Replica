import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSingleListing } from '../../../api/listingData';
import CreateListingForm from '../../../components/CreateListingForm';

export default function EditListing() {
  const [listing, setListing] = useState([]);
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleListing(firebaseKey).then(setListing);
  }, [firebaseKey]);

  return (
    <CreateListingForm obj={listing} />
  );
}
