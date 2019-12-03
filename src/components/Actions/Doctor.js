import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const Doctor = (props) => {
  const [doctor, setDoctor] = useState(null)
  const userId = props.user._id

  useEffect(() => {
    axios(`${apiUrl}/doctors/${props.match.params.id}`)
      .then(res => setDoctor(res.data.doctor))
      .catch(console.error)
  }, [])

  const handleDelete = (event) => {
    axios({
      url: `${apiUrl}/doctors/${props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      }
    })
      .then(() => {
        props.alert({ heading: 'Success', message: 'You deleted a doctor', variant: 'warning' })
        props.history.push('/doctors')
      })
      .catch(() => {
        props.alert({ heading: 'Failure', message: 'Something went wrong', variant: 'dander' })
      })
  }

  const handleUpdate = (event) => {
    history.push(`/doctors/${event.target.name}/edit`)
  }

  if (!doctor) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h2>{doctor.taxonomy_description}</h2>
      <h2>{doctor.first_name}</h2>
      <h2>{doctor.last_name}</h2>
      <h2>{doctor.city}</h2>
      <h2>{doctor.state}</h2>
      <h2>{doctor.postal_code}</h2>
      {userId === doctor.owner._id && <button onClick={handleDelete} className="btn btn-danger">Delete</button>}
      {userId === doctor.user._id && <button onClick={handleUpdate} className="btn btn-warning">Edit</button>}
    </div>
  )
}
export default withRouter(Doctor)
