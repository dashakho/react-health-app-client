import React, { useState, useEffect, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Button from 'react-bootstrap/Button'

const Doctor = props => {
  const [doctor, setDoctor] = useState(null)
  const userId = props.user ? props.user._id : null

  useEffect(() => { // Did mount
    console.log('hey')
    axios({
      url: `${apiUrl}/doctors/${props.match.params.id}`,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      }
    })
      .then(res => setDoctor(res.data.doctor))
      .catch(() => props.alert({ heading: 'That didn\'t work', message: 'Couldn\'t retrieve the requested doctor', variant: 'danger' }))
  }, [])

  const handleDelete = event => {
    axios({
      url: `${apiUrl}/doctors/${props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      }
    })
      .then(() => {
        props.alert({ heading: 'Success', message: 'You deleted a doctor', variant: 'warning' })
        props.history.push('/')
        history.push(`/doctors/${props.match.params.id}`)
      })
      .catch(() => {
        props.alert({ heading: 'Rut roh', message: 'Something went wrong', variant: 'danger' })
      })
  }

  const handleUpdate = (event) => {
    history.push(`/doctors/${event.target.name}/edit`)
  }

  if (!doctor) {
    return <p>Loading stuff...</p>
  }

  return (
    <div>
      <h2>{doctor.taxonomy_description}</h2>
      <h2>{doctor.first_name}</h2>
      <h2>{doctor.last_name}</h2>
      <h2>{doctor.city}</h2>
      <h2>{doctor.state}</h2>
      <h2>{doctor.postal_code}</h2>
      {userId === doctor.user_id && <Button variant={'danger'} id={doctor.id} onClick={handleDelete}>Delete</Button>}
      {userId === doctor.user_id && <Button variant={'warning'} onClick={handleUpdate} name={doctor.id}>Edit</Button>}
      <Fragment>
        <Button href={`#doctors/${props.match.params.id}/edit`} variant="primary" className="mr-2">Update</Button>
        <Button onClick={handleDelete} variant="danger" className="mr-2">Delete</Button>
      </Fragment>
      <Button href="#doctors/" variant="secondary">Back</Button>
    </div>
  )
}

export default withRouter(Doctor)
