/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
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

  const viewStyle = {
    marginTop: '25px',
    marginBottom: '50px',
    fontFamily: 'Tahoma',
  };

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            width={700}
            height={700}
            className="d-block w-100"
            src={listingDetails.imageUrl}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{listingDetails.title}</h3>
            <p>{listingDetails.location}, ${listingDetails.pricePerNight} per night.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width={700}
            height={700}
            className="d-block w-100"
            src={listingDetails.secondImg}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>{listingDetails.title}</h3>
            <p>{listingDetails.location}, ${listingDetails.pricePerNight} per night.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width={700}
            height={700}
            className="d-block w-100"
            src={listingDetails.thirdImg}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>{listingDetails.title}</h3>
            <p>
              {listingDetails.location}, ${listingDetails.pricePerNight} per night.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width={700}
            height={700}
            className="d-block w-100"
            src={listingDetails.fourthImg}
            alt="Fourth slide"
          />

          <Carousel.Caption>
            <h3>{listingDetails.title}</h3>
            <p>
              {listingDetails.location}, ${listingDetails.pricePerNight} per night.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div style={viewStyle} className="mt-5 d-flex flex-wrap">
        <div className="text-black ms-5 details">
          <h3 style={{ marginBottom: '20px' }}>{listingDetails.title}</h3>
          <h5>${listingDetails.pricePerNight} per night</h5>
          <p>{listingDetails.beds} Beds </p>
          <p>{listingDetails.baths} Baths</p>
          <p>{listingDetails.location}</p>
          <p>{listingDetails.propertyType}</p>
          <p>Amenities: {listingDetails.amenities}</p>
          <p>{listingDetails?.description || ''}</p>
          <hr />
        </div>
      </div>
    </>
  );
}
