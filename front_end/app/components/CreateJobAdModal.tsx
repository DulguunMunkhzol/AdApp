import React from 'react'

const CreateJobAdModal = ({open, onClose}) => {
    if(!open) return null;
    const [createJobAd, setCreateJobAd] = React.useState({
        hiringPosition: "",
        companyName: "",
        address: "",
        description: "",
        hourlyPay: 0
    })

    const handleCreateJobAd = ()=>{
        try{

        }catch(err){
            console.error(err);
            alert("error creating job ad");
        }
    }
    
  return (
    <div>
        <form action="submit">

                <input type="text" placeholder=" Enter hiring position" />
                <input type="text" placeholder=" Enter company name" />
                <input type="text" placeholder=" Enter address" />
                <input type="text" placeholder=" Enter Description" />
                <input type="text" placeholder=" Enter hourly Pay" />
                <button onClick={handleCreateJobAd}> Post </button>
        </form>
    <button onClick={onClose}>Close</button>
    </div>
  )
}

export default CreateJobAdModal