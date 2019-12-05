import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import DoctorForm from './DoctorForm'
import messages from '../AutoDismissAlert/messages'

const DoctorCreate = props => {
  const [doctor, setDoctor] = useState({ taxonomy_description: '', first_name: '', last_name: '', city: '', state: '', postal_code: '' })
  const { alert } = props
  // console.log('props', props)

  const handleChange = event => {
    event.persist()
    setDoctor({ ...doctor, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/doctors`,
      method: 'POST',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      },
      data: { doctor }
    })
      .then(response => {
        setDoctor({ taxonomy_description: '', first_name: '', last_name: '', city: '', state: '', postal_code: '' })
        alert({
          heading: 'Your Doctor Created Successfully',
          message: messages.createDoctorSuccess,
          variant: 'success' })
      })

      .catch(() => {
        setDoctor({ taxonomy_description: '', first_name: '', last_name: '', city: '', state: '', postal_code: '' })
        alert({
          heading: 'Something Went Wrong',
          message: messages.createDoctorFailure,
          variant: 'danger'
        })
      })
  }

  return (
    <DoctorForm
      doctor={doctor}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      cancelPath={'/'}
    />
  )
}
export default withRouter(DoctorCreate)
