import React, { useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'

const SearchForm = (props) => {
  const [info, setInfo] = useState({
    taxonomy_description: '',
    first_name: '',
    last_name: '',
    city: '',
    state: '',
    postal_code: ''
  })

  const handleChange = event => {
    event.persist()
    setInfo({ ...info, [event.target.name]: event.target.value })
  }
  const handleSubmit = event => {
    event.preventDefault()
    axios({
      url: `https://cors-anywhere.herokuapp.com/https://npiregistry.cms.hhs.gov/api/?taxonomy_description=${info.taxonomy_description}&first_name=${info.first_name}&last_name=${info.last_name}&city=${info.city}&state=${info.state}&postal_code=${info.postal_code}&version=2.0`,
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': true
      }
    })
      .then(res => {
      // setState
        // console.log('searchform res', res)
        // console.log('searchform res.data', res.data)
        // console.log('searchform res.data.results', res.data.results)
        // console.log('searchform res.data.result_count', res.data.result_count)
        // setInfo(res.data.data)
      })
      .catch(console.error)
  }

  // if (info.taxonomy_description !== '') {
  // } else {
  return (
    <form onSubmit={handleSubmit}>
      <li><label htmlFor="taxonomy_description">Taxonomy Description</label></li>
      <input
        id="taxonomy_description"
        placeholder="Find a Doctor by Specialty"
        value={''}
        name="taxonomy_description"
        minLength={3}
        onChange={handleChange}
      />

      <li><label htmlFor="first_name">First Name</label></li>
      <input
        id="first_name"
        placeholder="First Name"
        value={''}
        name="first_name"
        minLength={3}
        onChange={handleChange}
      />

      <li><label htmlFor="last_name">Last Name</label></li>
      <input
        id="last_name"
        placeholder="Last Name"
        value={''}
        name="last_name"
        minLength={3}
        onChange={handleChange}
      />
      <li><label htmlFor="city">City</label></li>
      <input
        id="city"
        placeholder="City"
        value={''}
        name="city"
        minLength={3}
        onChange={handleChange}
      />

      <li><label htmlFor="state">State</label></li>
      <input
        id="state"
        placeholder="State"
        value={''}
        name="state"
        minLength={2}
        onChange={handleChange}
      />

      <li><label htmlFor="postal_code">Postal Code</label></li>
      <input
        id="postal_code"
        placeholder="Postal Code"
        value={''}
        name="postal_code"
        minLength={5}
        onChange={handleChange}
      />
      <br/>
      <br/>

      <Button variant={'success'} type="submit">Search</Button>
    </form>
  )
}

export default SearchForm
