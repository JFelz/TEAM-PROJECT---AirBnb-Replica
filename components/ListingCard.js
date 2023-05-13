import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteListing, getAllListings } from '../api/listingData';

function ListingCard({ listingObj, onUpdate }) {
  const deleteThisListing = () => {
    if (window.confirm(`Delete ${listingObj.title}?`)) {
      deleteListing(listingObj.firebaseKey).then(() => onUpdate(getAllListings));
    }
  };

  return (
    <>
      <Link href={`/Listings/${listingObj.firebaseKey}`} passHref>
        <Card style={{
          height: '400px',
          width: '250px',
          margin: '10px',
          cursor: 'pointer',
        }}
        >
          <Card.Img variant="top" src={listingObj.imageUrl} alt={listingObj.title} style={{ height: '200px' }} />
          <Card.Body>
            <Card.Title style={{ minHeight: '20px', fontFamily: 'Gill Sans' }}>{listingObj.title}</Card.Title>
            <p className="card-text bold" style={{ fontFamily: 'Gill Sans' }}>${listingObj.pricePerNight} per night</p>
            <p className="card-text bold" style={{ fontFamily: 'Gill Sans' }}>{listingObj.petsAllowed && <span>Pets Allowed<br /></span> }</p>
            {/* DYNAMIC LINK TO VIEW THE LISTING DETAILS  */}
            {/* DYNAMIC LINK TO EDIT THE LISTING DETAILS  */}
          </Card.Body>
          <Card.Footer className="text-muted">
            <Link href={`/Listings/edit/${listingObj.firebaseKey}`} passHref>
              <Button variant="info" style={{ background: 'black', color: 'white', border: 'black' }}>EDIT</Button>
            </Link>
            <Link href="/explore" passHref>
              <Button variant="danger" onClick={deleteThisListing} className="m-2">
                DELETE
              </Button>
            </Link>

          </Card.Footer>
        </Card>
      </Link>
    </>
  );
}

ListingCard.propTypes = {
  listingObj: PropTypes.shape({
    imageUrl: PropTypes.string,
    propertyType: PropTypes.string,
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
