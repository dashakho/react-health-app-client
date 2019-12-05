import React, { useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const SearchForm = (props) => {
  const [info, setInfo] = useState({
    taxonomy_description: '',
    first_name: '',
    last_name: '',
    city: '',
    state: '',
    postal_code: ''
  })
  const [results, setResults] = useState(null)

  const handleChange = event => {
    event.persist()
    console.log(event.target.name)
    console.log(event.target.value)
    setInfo(info => ({ ...info, [event.target.name]: event.target.value }))
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
        // setResults(res.data.results)
        // console.log(results)
        // const resultsMapped = results.map(result => {
        //   return result.basic
        // })
        // console.log(resultsMapped)
        // console.log('searchform res', res)
        // console.log('searchform res.data', res.data)
        console.log('searchform res.data.results', res.data.results)
        console.log('searchform res.data.results[0]', res.data.results[0])
        console.log('searchform res.data.results[0].basic', res.data.results[0].basic)
        console.log('searchform res.data.results[0].basic.first_name', res.data.results[0].basic.first_name) // 10 result[0] - result[9] .map
        console.log('searchform res.data.results[0].basic.last_name', res.data.results[0].basic.last_name)
        // console.log('searchform res.data.results[0].taxonomies', res.data.results[0].taxonomies)
        // console.log('searchform res.data.results[0].taxonomies[0]', res.data.results[0].taxonomies[0])
        console.log('searchform res.data.results[0].taxonomies[0].desc', res.data.results[0].taxonomies[0].desc)
        console.log('searchform res.data.result_count', res.data.result_count) // 10 results
        setResults(res.data.results)
      })
      .catch(console.error)
  }

  if (results !== null) {
    const docHTML = results.map(result => (
      <div key={result.number}>
        <Form>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>First Name</Form.Label>
            <Form.Text className="text-muted TaxInfo">
              {result.basic.first_name}
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Text className="text-muted TaxInfo">
              {result.basic.last_name}
            </Form.Text>
          </Form.Group>
        </Form>
      </div>
    ))

    return (
      <div>
        <Container>
          <Row>
            <Col sm={6}>
              <form onSubmit={handleSubmit}>
                <li><label htmlFor="taxonomy_description">Taxonomy Description</label></li>
                <input
                  id="taxonomy_description"
                  value={info.taxonomy_description}
                  name="taxonomy_description"
                  minLength={3}
                  onChange={handleChange}
                />

                <li><label htmlFor="first_name">First Name</label></li>
                <input
                  id="first_name"
                  placeholder="First Name"
                  value={info.first_name}
                  name="first_name"
                  minLength={3}
                  onChange={handleChange}
                />

                <li><label htmlFor="last_name">Last Name</label></li>
                <input
                  id="last_name"
                  placeholder="Last Name"
                  value={info.last_name}
                  name="last_name"
                  minLength={3}
                  onChange={handleChange}
                />
                <li><label htmlFor="city">City</label></li>
                <input
                  id="city"
                  placeholder="City"
                  value={info.city}
                  name="city"
                  minLength={3}
                  onChange={handleChange}
                />

                <li><label htmlFor="state">State</label></li>
                <input
                  id="state"
                  placeholder="State"
                  value={info.state}
                  name="state"
                  minLength={2}
                  onChange={handleChange}
                />

                <li><label htmlFor="postal_code">Postal Code</label></li>
                <input
                  id="postal_code"
                  placeholder="Postal Code"
                  value={info.postal_code}
                  name="postal_code"
                  minLength={5}
                  onChange={handleChange}
                />
                <br/>
                <br/>

                <Button variant={'success'} type="submit">Search</Button>
              </form>
            </Col>
            <Col sm={6}>
              {docHTML}
            </Col>
          </Row>
        </Container>
      </div>
    )
  } else {
    return (
      <Container>
        <Row>
          <Col sm={6}>
            <form onSubmit={handleSubmit}>
              <li><label htmlFor="taxonomy_description">Doctor specialty</label></li>
              <input
                id="taxonomy_description"
                placeholder="Find a Doctor by Specialty"
                value={info.taxonomy_description}
                name="taxonomy_description"
                minLength={3}
                onChange={handleChange}
              />

              <li><label htmlFor="first_name">First Name</label></li>
              <input
                id="first_name"
                placeholder="First Name"
                value={info.first_name}
                name="first_name"
                minLength={3}
                onChange={handleChange}
              />

              <li><label htmlFor="last_name">Last Name</label></li>
              <input
                id="last_name"
                placeholder="Last Name"
                value={info.last_name}
                name="last_name"
                minLength={3}
                onChange={handleChange}
              />
              <li><label htmlFor="city">City</label></li>
              <input
                id="city"
                placeholder="City"
                value={info.city}
                name="city"
                minLength={3}
                onChange={handleChange}
              />

              <li><label htmlFor="state">State</label></li>
              <input
                id="state"
                placeholder="State"
                value={info.state}
                name="state"
                minLength={2}
                onChange={handleChange}
              />

              <li><label htmlFor="postal_code">Postal Code</label></li>
              <input
                id="postal_code"
                placeholder="Postal Code"
                value={info.postal_code}
                name="postal_code"
                minLength={5}
                onChange={handleChange}
              />
              <br/>
              <br/>

              <Button variant={'success'} type="submit">Search</Button>
            </form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default SearchForm
