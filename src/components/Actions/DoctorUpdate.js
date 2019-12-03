import React, { useEffect, useState } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import DoctorForm from './DoctorForm'
import messages from '../AutoDismissAlert/messages'

const DoctorUpdate = props => {
  const [doctor, setDoctor] = useState({ taxonomy_description: '', first_name: '', last_name: '', city: '', state: '', postal_code: '' })
  const [editedDoctor, setEditedDoctor] = useState(null)
  const { alert } = props

  useEffect(() => {
    axios(`${apiUrl}/doctors/${props.match.params.id}`)
      .then(res => setDoctor(res.data.doctor))
      .catch(console.error)
  }, [])

  const handleChange = event => {
    event.persist()
    setDoctor({ ...doctor, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/doctors/${props.match.params.id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      },
      data: { doctor }
    })
      .then(response => {
        setEditedDoctor(true)
        alert({
          heading: 'Ypur Doctor Successfully Edited ',
          message: messages.updateDoctorSuccess,
          variant: 'success' })
      })
      .catch(() => {
        alert({
          heading: 'Opps, try again',
          message: messages.updateDoctorFailure,
          variant: 'danger'
        })
      })
  }

  if (editedDoctor) {
    return <Redirect to={'/doctors'} />
  }

  return (
    <DoctorForm
      doctor={doctor}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      cancelPath={'/doctors'}
    />
  )
}

export default withRouter(DoctorUpdate)
