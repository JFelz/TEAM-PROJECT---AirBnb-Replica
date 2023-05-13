import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import { useRouter } from 'next/router';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { useAuth } from '../utils/context/authContext';
import { createListing, updateListing } from '../api/listingData';

const initialState = {
  title: '',
  location: '',
  property_type: '',
  beds: 0,
  baths: 0,
  pricePerNight: 0,
  description: '',
  amenities: '',
  imageUrl: '',
  secondImg: '',
  thirdImg: '',
  fourthImg: '',
  petsAllowed: false,
};

function CreateListingForm({ obj }) {
  const [formInput, setFormInput] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.firebaseKey) setFormInput(obj);
  }, [obj]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateListing(formInput)
        .then(() => router.push('/explore'));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createListing(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateListing(patchPayload).then(() => {
          router.push('/explore');
        });
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Listing</h2>

      {/* TITLE INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Listing Title" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Listing Title"
          name="title"
          value={formInput.title}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* LOCATION INPUT  */}
      <FloatingLabel controlId="floatingInput2" label="City, State" className="mb-3">
        <Form.Control
          type="text"
          placeholder="City, State"
          name="location"
          value={formInput.location}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* Property type SELECT  */}
      <FloatingLabel controlId="floatingSelect" label="Property Type">
        <Form.Select
          aria-label="property type"
          name="propertyType"
          onChange={handleChange}
          className="mb-3"
          value={formInput.propertyType} // FIXME: modify code to remove error
          required
        >
          <option value="">Select...</option>
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>
          <option value="Condo">Condo</option>
          <option value="Camper">Camper</option>
        </Form.Select>
      </FloatingLabel>

      {/* PRICE INPUT  */}
      <FloatingLabel controlId="floatingInput3" label="Beds" className="mb-3">
        <Form.Control
          type="number"
          placeholder="Beds"
          name="beds"
          value={formInput.beds}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput3" label="Baths" className="mb-3">
        <Form.Control
          type="number"
          placeholder="Baths"
          name="baths"
          value={formInput.baths}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* PRICE INPUT  */}
      <FloatingLabel controlId="floatingInput3" label="Listing Price" className="mb-3">
        <Form.Control
          type="number"
          placeholder="Enter price"
          name="pricePerNight"
          value={formInput.pricePerNight}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* DESCRIPTION TEXTAREA  */}
      <FloatingLabel controlId="floatingTextarea" label="Description" className="mb-3">
        <Form.Control
          as="textarea"
          placeholder="Description"
          style={{ height: '100px' }}
          name="description"
          value={formInput.description}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput3" label="Amenities" className="mb-3">
        <Form.Control
          type="text"
          placeholder="amenities"
          name="amenities"
          value={formInput.amenities}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="Property Image" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Enter an image url"
          name="imageUrl"
          value={formInput.imageUrl}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="Enter an interior image url" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Enter an interior image url"
          name="secondImg"
          value={formInput.secondImg}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="Enter another interior image url" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Enter another interior image url"
          name="thirdImg"
          value={formInput.thirdImg}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="Enter one more interior image url" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Enter one more interior image url"
          name="fourthImg"
          value={formInput.fourthImg}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* A WAY TO HANDLE UPDATES FOR TOGGLES, RADIOS, ETC  */}
      <Form.Check
        className="text-black mb-3"
        type="switch"
        id="petsAllowed"
        name="petsAllowed"
        label="Pets Allowed?"
        checked={formInput.petsAllowed}
        onChange={(e) => {
          setFormInput((prevState) => ({
            ...prevState,
            petsAllowed: e.target.checked,
          }));
        }}
      />

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Listing</Button>
    </Form>
  );
}

CreateListingForm.propTypes = {
  obj: PropTypes.shape({
    title: PropTypes.string,
    location: PropTypes.string,
    beds: PropTypes.number,
    baths: PropTypes.number,
    pricePerNight: PropTypes.number,
    description: PropTypes.string,
    amenities: PropTypes.string,
    imageUrl: PropTypes.string,
    secondImg: PropTypes.string,
    thirdImg: PropTypes.string,
    fourthImg: PropTypes.string,
    petsAllowed: PropTypes.bool,
    firebaseKey: PropTypes.string,
  }),
};

CreateListingForm.defaultProps = {
  obj: initialState,
};

export default CreateListingForm;
