import React, { use } from 'react'

const UpdateJobAdModal = ({open, onClose, jobId , onUpdated }) => {
    const [updatedJobAd, setUpdatedJobAd]=React.useState({
        hiringPosition: "",
        companyName: "",
        address: "",
        description: "",
        hourlyPay: 0,
        email:"",
        phoneNumber:""
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
            const res = await fetch(`http://localhost:8080/api/jobAd/${jobId}`,
                {
                method: "PUT",
                headers: {"content-type":"application/json"},
                body: JSON.stringify(updatedJobAd)
                }
            );
            
            await onUpdated();
            if(!res.ok){
                const errorData = await res.json();

                let message = "Failed to update job ad";
                if(errorData.error){
                    message =errorData.error;

                }else{
                    message =Object.values(errorData).join(", ");
                }

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
    <div className='modal'>
        <form onSubmit={handleUpdateJobAd}>
            <input className='form-input' type="text" name="hiringPosition" placeholder="Update Hiring Position" value={updatedJobAd.hiringPosition} onChange={handleChange}/>
            <input className='form-input' type="text" name="companyName" placeholder='Update Company Name' value={updatedJobAd.companyName} onChange={handleChange}/>
            <input className='form-input' type="text" name="address" placeholder='Update address' value={updatedJobAd.address} onChange={handleChange}/>
            <input className='form-input' type="text" name="description" placeholder='Update description' value={updatedJobAd.description} onChange={handleChange}/>
            <input className='form-input' type="number" name="hourlyPay" placeholder='Update hourly pay' value={updatedJobAd.hourlyPay} onChange={handleChange}/>
            <input className='form-input' type="text"  name="email" placeholder='update email' value={updatedJobAd.email} onChange={handleChange}/>
            <input className='form-input' type="text" name="phoneNumber" placeholder='update phone number' value={updatedJobAd.phoneNumber} onChange={handleChange}/>
            {/* <p>{jobId}</p> */}
            <button className='btn btn-secondary' type="submit">Update</button>
        </form>
        <button className='btn btn-danger' onClick={onClose}>close</button>
    </div>
)
}

export default UpdateJobAdModal