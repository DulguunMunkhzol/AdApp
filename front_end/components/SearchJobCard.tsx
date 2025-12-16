import React from 'react'

const SearchJobCard = ({job}) => {
  return (
    <article className="card">
      <h3>{job.hiringPosition}</h3>
      <p>{job.companyName} - {job.address}</p>
      <p>{job.description}</p>
      <p>{job.hourlyPay.toFixed(2)} $/hr</p>
      <p>{job.email}</p>
      <p>{job.phoneNumber}</p>
    </article>
  )
}

export default SearchJobCard