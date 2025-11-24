package com.example.ZariinApp.services;

import com.example.ZariinApp.dto.JobAdDto;
import com.example.ZariinApp.entities.JobAd;

public interface AdService {
    JobAdDto createJobAd(JobAdDto jobAdDto);
}
