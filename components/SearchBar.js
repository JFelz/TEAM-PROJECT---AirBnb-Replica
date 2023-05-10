import { useEffect, useState } from 'react';
import ListingCard from './ListingCard';
import { searchListings } from '../api/listingData';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [listings, setListings] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    const filteredListings = listings.filter((listing) => listing.title.toLowerCase().includes(searchQuery.toLowerCase()) || listing.propertyType.toLowerCase().includes(searchQuery.toLowerCase()));
    setFilteredItems(filteredListings);
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    searchListings().then((listingObj) => setListings(Object.values(listingObj)));
  }, []);

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search listings"
        value={searchQuery}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
      {filteredItems?.map((item) => (
        <ListingCard key={item.firebaseKey} listingObj={item} onUpdate={setListings} />
      ))}
    </form>
  );
}
