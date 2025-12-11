import React from 'react'
import ShowDetailModal from './ShowDetailModal';
import DeleteJobAdBtn from './DeleteJobAdBtn';
import UpdateJobAdModal from './UpdateJobAdModal';
import { refresh } from 'next/cache';

const JobCard = ({job, onDelete, refresh}) => {
  const [open, setOpen] = React.useState(false);
  const [openUpdateModal, setOpenUpdateModal]=React.useState(false);

    
  return (
    <article className="card">
      <h3>{job.hiringPosition}</h3>
      <p>{job.companyName} - {job.address}</p>
      <p>{job.description}</p>
      <p>{job.hourlyPay.toFixed(2)} $/hr</p>
      <p>{job.email}</p>
      <p>{job.phoneNumber}</p>
      
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