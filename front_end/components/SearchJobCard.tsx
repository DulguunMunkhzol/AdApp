import React from 'react'

const SearchJobCard = ({job}) => {
  return (
    <article className="card">
      <h2>{job.hiringPosition}</h2>
        <p><strong>Company:</strong> {job.companyName}</p>
        <p><strong>Address:</strong> {job.address}</p>
        <p><strong>Description:</strong> {job.description}</p>
        <p><strong>Hourly Pay:</strong> {job.hourlyPay.toFixed(2)} $</p>
        <p><strong>email:</strong> {job.email}</p>
        <p><strong>phone number:</strong> {job.phoneNumber}</p>
    </article>
  )
}

export default SearchJobCard