import React from 'react'


const CreateJobAdModal = ({open, onClose, onCreated}) => {
    const [createJobAd, setCreateJobAd] = React.useState({
        hiringPosition: "",
        companyName: "",
        address: "",
        description: "",
        hourlyPay: 0,
        email:"",
        phoneNumber:""
    })
    if(!open) return null;

    const handleCreateJobAd = async(e)=>{
        e.preventDefault();
        try{
            const res = await fetch("http://localhost:8080/api/jobAd",{
                method: "POST",
                headers:{"content-type": "application/json"},
                body: JSON.stringify(createJobAd)
                }
            );
            if(!res.ok){
                const ErrorData = await res.json();

                let message = "Failed to create job ad";
                if(ErrorData.error){
                    message =ErrorData.error;
                }else{
                    message =Object.values(ErrorData).join(", ");
                }
                
                throw new Error( message);
            }
            
            await onCreated();
            setCreateJobAd({
                   hiringPosition: "",
                    companyName: "",
                    address: "",
                    description: "",
                    hourlyPay: 0,
                    email:"",
                    phoneNumber:""
            })
            onClose();

        }catch(err){
            console.error(err);
            alert("error creating job ad: " + err.message);
        }
    }

    const handleChange = (e)=>{
        
        const {name, value} = e.target;
        setCreateJobAd((prev)=>({
            ...prev,
            [name]: name === "hourlyPay" ? (parseFloat(value)||0):value
        }))
    }
    


  return (
    <div className='modal'>
        <form  onSubmit={handleCreateJobAd}>

                <input className='form-input' type="text"  placeholder=" Enter hiring position" name="hiringPosition" value={createJobAd.hiringPosition} onChange={handleChange}/>
                <input className='form-input' type="text" placeholder=" Enter company name" name="companyName" value={createJobAd.companyName} onChange={handleChange}/>
                <input className='form-input' type="text" placeholder=" Enter address" name="address" value={createJobAd.address} onChange={handleChange}/>
                <input className='form-input' type="text" placeholder=" Enter Description" name="description" value={createJobAd.description} onChange={handleChange}/>
                <input className='form-input' type="number" placeholder=" Enter hourly Pay" name="hourlyPay" value={createJobAd.hourlyPay} onChange={handleChange}/>
                <input className='form-input' type="text" placeholder=" Enter email" name="email" value={createJobAd.email} onChange={handleChange}/>
                <input className='form-input' type="text" placeholder=" Enter phone number" name="phoneNumber" value={createJobAd.phoneNumber} onChange={handleChange}/>
                <button className='btn btn-secondary ' type="submit"> Post </button>
        </form>
    <button className='btn btn-danger ' onClick={onClose}>Close</button>
    </div>
  )
}

export default CreateJobAdModal