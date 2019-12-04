import React, { useState, useEffect, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Button from 'react-bootstrap/Button'

const Doctor = props => {
  const [doctor, setDoctor] = useState(null)
  const userId = props.user ? props.user._id : null

  useEffect(() => {
    axios(`${apiUrl}/doctors/${props.match.params.id}`)
      .then(res => setDoctor(res.data.doctor))
      .catch(() => props.alert({ heading: 'That didn\'t work', message: 'Couldn\'t retrieve the requested doctor', variant: 'danger' }))
  }, [])

  const handleDelete = event => {
    axios({
      url: `{apiUrl}/doctors/${event.target.id}`,
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
      {userId === doctor.owner._id && <button onClick={handleDelete} className="btn btn-danger">Delete</button>}
      <Fragment>
        <Button href={`#doctors/${props.match.params.id}/edit`} variant="primary" className="mr-2">Update</Button>
        <Button onClick={handleDelete} variant="danger" className="mr-2">Delete</Button>
      </Fragment>
      <Button href="#/" variant="secondary">Back</Button>
    </div>
  )
}

export default withRouter(Doctor)

//     <div className="row">
//       <div className="col-sm-10 col-md-8 mx-auto mt-5">
//         <h2>{doctor.first_name}</h2>
//         <h3 className="h5">{doctor.last_name}</h3>
//         {doctor.taxonomy_description
//           ? <p>Orginally written in {book.originalLanguage}</p>
//           : <p className="text-muted">No original language specified</p>
//         }
//         {userId === doctor.owner && (
//           <Fragment>
//             <Button href={`#doctors/${props.match.params.id}/edit`} variant="primary" className="mr-2">Update</Button>
//             <Button onClick={handleDelete} variant="danger" className="mr-2">Delete</Button>
//           </Fragment>
//         )}
//         <Button href="#/" variant="secondary">Back</Button>
//       </div>
//     </div>
//   )
// }
// --

// const Doctor = (props) => {
//   const [doctor, setDoctor] = useState(null)
//   console.log(props)
//   const userId = props.user._id
//
//   useEffect(() => {
//     axios({
//       url: `${apiUrl}/doctors/${props.match.params.id}`,
//       method: 'GET',
//       headers: {
//         'Authorization': `Token token=${props.user ? props.user.token : ''}`
//       }
//     })
//     // axios(`${apiUrl}/doctors/${props.match.params.id}`)
//       .then(res => setDoctor(res.data.doctor))
//       .catch(console.error)
//   }, [])
//
//   const handleDelete = (event) => {
//     axios({
//       url: `${apiUrl}/doctors/${props.match.params.id}`,
//       method: 'DELETE',
//       headers: {
//         'Authorization': `Bearer ${props.user.token}`
//       }
//     })
//       .then(() => {
//         props.alert({ heading: 'Success', message: 'You deleted a doctor', variant: 'warning' })
//         props.history.push('/doctors')
//       })
//       .catch(() => {
//         props.alert({ heading: 'Failure', message: 'Something went wrong', variant: 'dander' })
//       })
//   }
//
//   const handleUpdate = (event) => {
//     history.push(`/doctors/${event.target.name}/edit`)
//   }
//
//   if (!doctor) {
//     return <p>Loading...</p>
//   }
//
//   return (
//     <div>
//       <h2>{doctor.taxonomy_description}</h2>
//       <h2>{doctor.first_name}</h2>
//       <h2>{doctor.last_name}</h2>
//       <h2>{doctor.city}</h2>
//       <h2>{doctor.state}</h2>
//       <h2>{doctor.postal_code}</h2>
//       {userId === doctor.owner._id && <button onClick={handleDelete} className="btn btn-danger">Delete</button>}
//       {userId === doctor.user._id && <button onClick={handleUpdate} className="btn btn-warning">Edit</button>}
//     </div>
//   )
// }
// export default withRouter(Doctor)
