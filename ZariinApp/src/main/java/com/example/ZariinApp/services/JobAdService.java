package com.example.ZariinApp.services;

import com.example.ZariinApp.dto.JobAdDto;
import org.springframework.stereotype.Service;

import java.util.List;

public interface JobAdService {
    JobAdDto createJobAd(JobAdDto jobAdDto);
    JobAdDto getJobAdById(Long jobAdId);
    List<JobAdDto> getAllJobAd();
    JobAdDto updateJobAd(Long jobId, JobAdDto updatedJobAd);
    void deleteJobAd(Long jobId);
}
