export default function DeleteJobAdBtn( {jobId, onDelete}) { //jobid is needed to delete, ondelete is or after deletion

    const handleDelete = async ()=>{
        const confirmed = window.confirm("Are you sure you want to delete this job ad?");
        if(!confirmed) return;
        try{
            const res = await fetch(`http://localhost:8080/api/jobAd/${jobId}`, {
                method: 'DELETE',
            });
            if(!res.ok){
                throw new Error("Failed to delete the job ad");
            }
            onDelete(jobId);
        }catch(err){
            console.error(err);
            alert("An error occurred while deleting the job ad.");
        }

    }


  return (
    <button 
      className="btn btn-danger"
      onClick={handleDelete}>
      Delete Job Ad
    </button>
  );
}