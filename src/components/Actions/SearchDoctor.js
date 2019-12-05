import React from 'react'

const SearchDoctor = (props) => {
  const handleOnKeyUp = e => {
    const value = e.target.value
    if (value.trim().length > 0) {
      updateMap(value)
    }
  }

  const updateMap = query => {
    const request = `https://www.google.com/maps/embed/v1/search?key=AIzaSyD2MHExIrVxGAXOFJamNwX-5NBfBQA12So&q=${query}`

    this.map.setAttribute('src', request)
  }

  return (
    <div>
      <iframe width="560" height="315" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed" ref={(c) => { this.map = c }}></iframe>
      <br />
      <input id="search" onKeyUp={handleOnKeyUp} />
    </div>
  )
}

export default SearchDoctor
