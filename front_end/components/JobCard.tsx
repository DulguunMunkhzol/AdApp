import React from 'react'
import ShowDetailModal from './ShowDetailModal';
import DeleteJobAdBtn from './DeleteJobAdBtn';
import UpdateJobAdModal from './UpdateJobAdModal';

const JobCard = ({job, onDelete, refresh}) => {
  const [open, setOpen] = React.useState(false);
  const [openUpdateModal, setOpenUpdateModal]=React.useState(false);

    
  return (
    <article className="card">
      <h2>{job.hiringPosition}</h2>
        <p><strong>Company:</strong> {job.companyName}</p>
        <p><strong>Address:</strong> {job.address}</p>
        <p><strong>Description:</strong> {job.description}</p>
        <p><strong>Hourly Pay:</strong> {job.hourlyPay.toFixed(2)} $</p>
        <p><strong>email:</strong> {job.email}</p>
        <p><strong>phone number:</strong> {job.phoneNumber}</p>
      
      <button className='btn btn-secondary' onClick={()=>setOpen(true)}>
        View Details
      </button>

      <ShowDetailModal open={open} onClose={()=> setOpen(false)} job = {job}/>

      <DeleteJobAdBtn 
      jobId={job.id}
      onDelete = {onDelete}
      />

      <button
      className="btn btn-secondary" 
      onClick ={()=> setOpenUpdateModal(true)}>
        Edit Job Ad
      </button>

      <UpdateJobAdModal
      open = {openUpdateModal}
      onClose = {()=>setOpenUpdateModal(false)}
      jobId={job.id}
      onUpdated={refresh}
      />
      


    </article>
  )
}

export default JobCard