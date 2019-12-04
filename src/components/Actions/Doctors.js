import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const Doctors = props => {
  const [doctors, setDoctors] = useState([])

  useEffect(() => {
    console.warn(props.user)

    axios({
      url: `${apiUrl}/doctors`,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${props.user ? props.user.token : ''}`
      }
    }) // GET
      .then(response => {
        setDoctors(response.data.doctors)
      })
      .then(() => props.alert({ heading: 'Success', message: 'You got doctors', variant: 'success' }))
      .catch(() => props.alert({ heading: 'Failure', message: 'Something went wrong', variant: 'danger' }))
  }, [])

  const doctorsJsx = doctors.map(doctor => (
    <ListGroup.Item key={doctor._id} as={'a'} href={`#/doctors/${doctor._id}`}>
      {doctor.last_name}
    </ListGroup.Item>
  ))

  //   return (
  //     <div>
  //       <h1>My Selected Doctors</h1>
  //       <Link to="/create-doctor">Add a Doctor</Link>
  //       <ListGroup>
  //         {doctorsJsx}
  //       </ListGroup>
  //     </div>
  //   )
  // }
  return (
    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <div className="d-flex justify-content-between align-items-center">
          {props.user && <Link to="/create-doctor">Add a doctor</Link>}
        </div>
        <ListGroup>
          {doctorsJsx}
        </ListGroup>
      </div>
    </div>
  )
}

export default Doctors
