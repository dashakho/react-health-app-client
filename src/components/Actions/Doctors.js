import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const Doctors = props => {
  const [doctors, setDoctors] = useState([])

  useEffect(() => {
    axios(`${apiUrl}/doctors`)
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

  return (
    <div>
      <h1>Doctors</h1>
      <Link to="/create-doctor">Add a Doctor</Link>
      <ListGroup>
        {doctorsJsx}
      </ListGroup>
    </div>
  )
}

export default Doctors
