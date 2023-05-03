import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteListing } from '../api/listingData';

function ListingCard({ listingObj, onUpdate }) {
  const deleteThisListing = () => {
    if (window.confirm(`Delete ${listingObj.title}?`)) {
      deleteListing(listingObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={listingObj.imageUrl} alt={listingObj.title} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{listingObj.title}</Card.Title>
        <p className="card-text bold">${listingObj.pricePerNight}</p>
        <p className="card-text bold">${listingObj.beds} BEDS</p>
        <p className="card-text bold">${listingObj.baths} BATHS</p>
        <p className="card-text bold">{listingObj.petsAllowed && <span>Pets Allowed<br /></span> }</p>
        <p className="card-text bold">${listingObj.description}</p>
        {/* DYNAMIC LINK TO VIEW THE LISTING DETAILS  */}
        <Link href={`/listing/${listingObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        {/* DYNAMIC LINK TO EDIT THE LISTING DETAILS  */}
        <Link href={`/listing/edit/${listingObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisListing} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

ListingCard.propTypes = {
  listingObj: PropTypes.shape({
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    pricePerNight: PropTypes.number,
    beds: PropTypes.number,
    baths: PropTypes.number,
    petsAllowed: PropTypes.bool,
    description: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ListingCard;
