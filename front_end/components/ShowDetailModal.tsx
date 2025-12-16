import React from 'react'

const ShowDetailModal = ({open, onClose, job}) => {
    if(!open)return null;
  return (
    <div className="modal">
        <h2>{job.hiringPosition}</h2>
        <p><strong>Company:</strong> {job.companyName}</p>
        <p><strong>Address:</strong> {job.address}</p>
        <p><strong>Description:</strong> {job.description}</p>
        <p><strong>Hourly Pay:</strong> {job.hourlyPay.toFixed(2)} $</p>
        <p><strong>email:</strong> {job.email}</p>
        <p><strong>phone number:</strong> {job.phoneNumber}</p>
        <button className="btn btn-danger" onClick={onClose}>Close</button>
    </div>
  )
}

export default ShowDetailModal