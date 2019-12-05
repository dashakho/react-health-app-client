import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const DoctorForm = ({ doctor, handleChange, handleSubmit, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <br />
    <br />
    <br />
    <div className="row form-group justify-content-start">
      <label className="col-sm-4 col-form-label"></label>
      <label htmlFor="taxonomy_description">Specialty </label>
      <input
        id="taxonomy_description"
        placeholder="Specialty"
        value={doctor.taxonomy_description}
        name="taxonomy_description"
        minLength={3}
        required
        onChange={handleChange}
      />
    </div>
    <div className="row form-group justify-content-start">
      <label className="col-sm-4 col-form-label"></label>
      <label htmlFor="first_name">First Name</label>
      <input
        id="first_name"
        placeholder="First Name"
        value={doctor.first_name}
        name="first_name"
        minLength={3}
        required
        onChange={handleChange}
      />
    </div>
    <div className="row form-group justify-content-start">
      <label className="col-sm-4 col-form-label"></label>
      <label htmlFor="last_name">Last Name</label>
      <input
        id="last_name"
        placeholder="Last Name"
        value={doctor.last_name}
        name="last_name"
        minLength={3}
        onChange={handleChange}
      />
    </div>
    <div className="row form-group justify-content-start">
      <label className="col-sm-4 col-form-label"></label>
      <label htmlFor="city">City</label>
      <input
        id="city"
        placeholder="City"
        value={doctor.city}
        name="city"
        minLength={3}
        required
        onChange={handleChange}
      />
    </div>
    <div className="row form-group justify-content-start">
      <label className="col-sm-4 col-form-label"></label>
      <label htmlFor="state">State</label>
      <input
        id="state"
        placeholder="State"
        value={doctor.state}
        name="state"
        minLength={2}
        required
        onChange={handleChange}
      />
    </div>
    <div className="row form-group justify-content-start">
      <label className="col-sm-4 col-form-label"></label>
      <label htmlFor="postal_code">Zip Code</label>
      <input
        id="postal_code"
        placeholder="Postal Code"
        value={doctor.postal_code}
        name="postal_code"
        minLength={5}
        required
        onChange={handleChange}
      />
    </div>
    <div className="text-center">
      <Button variant={'success'} type="submit">Submit</Button>
      <Link to={cancelPath}>
        <Button variant={'danger'} type="button">Cancel</Button>
        <br />
      </Link>
    </div>
  </form>
)
export default DoctorForm
