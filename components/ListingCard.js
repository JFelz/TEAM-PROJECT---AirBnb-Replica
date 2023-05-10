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
    <Link href={`/Listings/${listingObj.firebaseKey}`} passHref>
      <Card style={{ width: '18rem', margin: '10px', cursor: 'pointer' }}>
        <Card.Img variant="top" src={listingObj.imageUrl} alt={listingObj.title} style={{ height: '400px' }} />
        <Card.Body>
          <Card.Title style={{ minHeight: '50px' }}>{listingObj.title}</Card.Title>
          <p className="card-text bold">${listingObj.pricePerNight}</p>
          <p className="card-text bold">{listingObj.beds} BEDS</p>
          <p className="card-text bold">{listingObj.baths} BATHS</p>
          <p className="card-text bold">{listingObj.petsAllowed && <span>Pets Allowed<br /></span> }</p>
          <p className="card-text bold description-clamp">{listingObj.description}</p>
          {/* DYNAMIC LINK TO VIEW THE LISTING DETAILS  */}
          {/* DYNAMIC LINK TO EDIT THE LISTING DETAILS  */}
        </Card.Body>
        <Card.Footer className="text-muted">
          <Link href={`/Listings/edit/${listingObj.firebaseKey}`} passHref>
            <Button variant="info">EDIT</Button>
          </Link>
          <Button variant="danger" onClick={deleteThisListing} className="m-2">
            DELETE
          </Button>

        </Card.Footer>
      </Card>
    </Link>

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
