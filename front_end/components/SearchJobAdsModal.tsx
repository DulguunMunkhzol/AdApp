import React, { useEffect } from 'react'
import SearchJobCard from './SearchJobCard';

const SearchJobAdsModal = ({open, onClose, search}) => {
    const [jobs, setJobs]=React.useState([]);

    useEffect(()=>{
        if(!open || !search.trim()) return;

        const fetchJobs = async()=>{
            try{
                const encodedSearch=encodeURIComponent(search);
                const res = await fetch(`http://localhost:8080/api/jobAd/search?search=${encodedSearch}`);
                const data = await res.json();
                setJobs(data);
            }catch(err){
                console.error(err);
            }
        };
        fetchJobs();
    },[open, search])
    

    if(!open) return null;

    return (
    <div >
        <p>Results:</p>
        <div className="container cards-grid">
            {
                jobs.map(job=>(
                    <SearchJobCard
                    key={job.id}
                    job={job}
                    />
                ))
            }
            
        </div>
        <button className="btn btn-danger" onClick={onClose}>close</button>
    </div>

  )
}

export default SearchJobAdsModal