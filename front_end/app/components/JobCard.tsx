import React from 'react'
import ShowDetailModal from './ShowDetailModal';
import DeleteJobAdBtn from './DeleteJobAdBtn';

const JobCard = ({job, onDelete}) => {
  const [open, setOpen] = React.useState(false);
  
  return (
    <article className="card">
      <h3>{job.hiringPosition}</h3>
      <p>{job.companyName} - {job.address}</p>
      <p>{job.description}</p>
      <p>{job.hourlyPay.toFixed(2)} $</p>
      
      <button onClick={()=>setOpen(true)}>
        View Details
      </button>

      <ShowDetailModal open={open} onClose={()=> setOpen(false)} job = {job}/>

      <DeleteJobAdBtn 
      jobId={job.id}
      onDelete = {onDelete}
      />

    </article>
  )
}

export default JobCard