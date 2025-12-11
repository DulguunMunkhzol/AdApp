"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import JobCard from "./components/JobCard";
import CreateJobAdModal from "./components/CreateJobAdModal";


export default function Home() {
  const [JobModalOpen, setJobModalOpen] = React.useState(false);


  const [jobs, setJobs] = React.useState([]);
  useEffect(()=>{
    fetch("http://localhost:8080/api/jobAd")
    .then(res=>res.json())
    .then(data=>setJobs(data))
    .catch(err=>console.error(err));
  },[]);

  const handleDelete =(id)=>{
    setJobs(prev=>prev.filter(job=>job.id!=id));
  }

  const refreshJobs = async()=>{
    const res = await fetch("http://localhost:8080/api/jobAd");
    const data = await res.json();
    setJobs(data);
  }



  return (
  <div className="home-root">
    <header className="home-hero">
      <div className="container">
        <h1 className="title">
          Find your Next Job
        </h1>
        <p className="subtitle">Browse thousands of job ads or post your own.</p>
        <div className="search">
          <input 
          type="text" 
          placeholder="Search jobs titles, companies...."
          className="search-input"
          />
          <button className="btn btn-primary">Search</button>
        </div>
      </div>
    </header>

    <main >
      <div className="container cards-grid">
      {jobs.map(job=>(
        <JobCard
        key = {job.id}
        job={job}
        onDelete={handleDelete}
        refresh={refreshJobs}
        />
        ))}
        </div>
    </main>
    
    <footer className="footer">
      <div className="container">
        <button
        className="btn btn-accent" onClick={()=>setJobModalOpen(true)}
        > Post a Job </button>
        <CreateJobAdModal
        open = {JobModalOpen}
        onClose = {()=>setJobModalOpen(false)}
        onCreated = {refreshJobs}
        />
      </div>
    </footer>
  </div>
  );
}
