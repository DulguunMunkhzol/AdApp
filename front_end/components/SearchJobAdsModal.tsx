import React, { useEffect } from 'react'
import SearchJobCard from './SearchJobCard';

const SearchJobAdsModal = ({open, onClose, search}) => {
    const [jobs, setJobs]=React.useState([]);
    const [page, setPage] = React.useState(0);
    const [totalPages, setTotalPages] = React.useState(0);

    const fetchJobs = async(pageNumber = 0)=>{
                try{
                    const encodedSearch=encodeURIComponent(search.trim());
                    const res = await fetch(
                        `http://localhost:8080/api/jobAd/search?search=${encodedSearch}&page=${pageNumber}&size=9`);


                        console.log("response Status:", res.status);
                    if(!res.ok){

                    const text = await res.text();
                    console.error("Response body:", text);
                    throw new Error(`Failed to fetch jobs (${res.status})`);

                    };

                    const data = await res.json();
                    setJobs(data.content);
                    setPage(data.page);
                    setTotalPages(data.totalPages);
                }catch(err){
                    console.error(err);
                }
            };

    useEffect(()=>{
        if(!open || !search.trim()) return;
        fetchJobs(0);
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
        <div>
            <button
            onClick={()=>fetchJobs(page-1)}
            disabled={page === 0}
            >
                previous
            </button>
            <span>
                Page {page+1} of {totalPages}
            </span>
            <button
            onClick={()=>fetchJobs(page+1)}
            disabled={page+1>=totalPages}
            >
                Next
            </button>
        </div>
        <button className="btn btn-danger" onClick={onClose}>close</button>
    </div>

  )
}

export default SearchJobAdsModal