import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';

const initialState = {
  title: '',
  location: '',
  property_type: '',
  beds: '',
  baths: '',
  price: 0,
  description: '',
  amenities: '',
  imageUrl: '',
  petsAllowed: false,
};

function CreateListingForm({ obj }) {
  const [formInput, setFormInput] = useState([]);

  useEffect(() => {
    if (obj.firebaseKey) setFormInput(obj);
  }, [obj]);

  const handleSubmit = () => {

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

      {/* IMAGE INPUT  */}
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
          type="text"
          placeholder="Beds"
          name="beds"
          value={formInput.beds}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput3" label="Baths" className="mb-3">
        <Form.Control
          type="text"
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
          type="text"
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
          name="image"
          value={formInput.imageUrl}
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
    beds: PropTypes.string,
    baths: PropTypes.number,
    price: PropTypes.number,
    description: PropTypes.string,
    amenities: PropTypes.string,
    imageUrl: PropTypes.string,
    petsAllowed: PropTypes.bool,
    firebaseKey: PropTypes.string,
  }),
};

CreateListingForm.defaultProps = {
  obj: initialState,
};

export default CreateListingForm;
