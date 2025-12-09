/*
  This file is HomePage.jsx
  A separate CSS file is included below (HomePage.css). Create that file alongside this component and paste the CSS.
*/

import React from 'react';
import './HomePage.css';
import JobModal from './component/postJobModal.jsx';
import JobCard from './component/jobCard.jsx';
import { useEffect } from "react";

export default function HomePage() {
  const [JobModalOpen, setJobModalOpen] = React.useState(false);

  const [jobs, setJobs] = React.useState([]);
  
  useEffect(()=>{
    fetch("http://localhost:8080/api/jobAd")
    .then(res=>res.json())
    .then(data=>setJobs(data))
    .catch(err=>console.error(err));
  },[]);

  const handleDelete = (id)=>{
    setJobs(prev=> prev.filter(job=>job.id !==id));
  }

  return (
    <div className="home-root">
      <header className="home-hero">
        <div className="container">
          <h1 className="title">Find Your Next Job</h1>
          <p className="subtitle">Browse thousands of job ads or post your own.</p>

          <div className="search">
            <input
              type="text"
              placeholder="Search job titles, companies..."
              className="search-input"
            />
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </header>

      <main className="container cards-grid">
        {jobs.map(job=>(
          <JobCard 
            key={job.id} 
            job={job} 
            onDelete={handleDelete}
          />
        ))}
      </main>

      <footer className="footer">
        <div className="container">
          <button className="btn btn-accent" onClick={()=>setJobModalOpen(true)}>Post a Job</button>
            <JobModal 
            open={JobModalOpen} 
            onClose={()=>setJobModalOpen(false)}
            />
        </div>
      </footer>
    </div>
  );
}

