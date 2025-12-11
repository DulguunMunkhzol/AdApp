import React, { use } from 'react'

const UpdateJobAdModal = ({open, onClose, jobId , onUpdated }) => {
    const [updatedJobAd, setUpdatedJobAd]=React.useState({
        hiringPosition: "",
        companyName: "",
        address: "",
        description: "",
        hourlyPay: 0
    })

    React.useEffect(()=>{
        if(!jobId) return;
        const fetchJob  = async()=>{
        try{
            const res = await fetch(`http://localhost:8080/api/jobAd/${jobId}`);
            if(!res.ok) throw new Error("Failed to fetch job ad details");
            const data = await res.json();
            setUpdatedJobAd(data)
        }catch(err){
            console.error(err);
            alert("Error loading job ad details: " + err.message);
        }
        };
        fetchJob();
    }, [jobId]);

    if(!open) return null;


    const handleUpdateJobAd = async (e)=>{
        e.preventDefault();
        try{
            const res = await fetch(`http://localhost:8080/api/jobAd/update/${jobId}`,
                {
                method: "PUT",
                headers: {"content-type":"application/json"},
                body: JSON.stringify(updatedJobAd)
                }
            );
            
            await onUpdated();
            if(!res.ok){
                const ErrorData = await res.json();
                const message = ErrorData.message||"Failed to Update Job Ad";
                throw new Error(message);
            }
            onClose();
        }catch(err){
            console.error(err);
            alert("Error updating job ad: " + err.message);
        }

    }

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setUpdatedJobAd((prev)=>({
            ...prev,
            [name]: name === "hourlyPay" ? (parseFloat(value)||0):value
        }))
    }

  return (
    <div>
        <form onSubmit={handleUpdateJobAd}>
            <input type="text" name="hiringPosition" placeholder="Update Hiring Position" value={updatedJobAd.hiringPosition} onChange={handleChange}/>
            <input type="text" name="companyName" placeholder='Update Company Name' value={updatedJobAd.companyName} onChange={handleChange}/>
            <input type="text" name="address" placeholder='Update address' value={updatedJobAd.address} onChange={handleChange}/>
            <input type="text" name="description" placeholder='Update description' value={updatedJobAd.description} onChange={handleChange}/>
            <input type="number" name="hourlyPay" placeholder='Update hourly pay' value={updatedJobAd.hourlyPay} onChange={handleChange}/>
            <p>{jobId}</p>
            <button type="submit">Update</button>
        </form>
        <button onClick={onClose}>close</button>
    </div>
)
}

export default UpdateJobAdModal