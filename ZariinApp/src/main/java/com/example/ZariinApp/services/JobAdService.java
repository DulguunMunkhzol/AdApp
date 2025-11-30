package com.example.ZariinApp.services;

import com.example.ZariinApp.dto.JobAdDto;
import com.example.ZariinApp.entities.JobAd;

import java.util.List;

public interface AdService {
    JobAdDto createJobAd(JobAdDto jobAdDto);
    JobAdDto getJobAdById(Long jobAdId);
    List<JobAdDto> getAllJobAd();
    JobAdDto updateJobAd(Long jobId, JobAdDto updatedJobAd);
    void deleteJobAd(Long jobId);
}
