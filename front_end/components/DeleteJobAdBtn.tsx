import React from 'react'

const DeleteJobAdBtn =  ({jobId, onDelete}) => {
    const handleDelete = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this job ad?");
    if (!confirmed) return;
    try{
        const res = await fetch(`http://localhost:8080/api/jobAd/${jobId}`,{
            method: "DELETE",
        });
        if(!res.ok){
            throw new Error("Failed to delete job ad");
        }
        onDelete(jobId);
    }catch(err){
        console.error(err);
        alert("Error deleting job ad");
    }
    };
    return (
    <button
    className="btn btn-danger"
    onClick={handleDelete}
    >
        Delete job ad
    </button>
)
}

export default DeleteJobAdBtn