package com.example.ZariinApp.services.impl;

import com.example.ZariinApp.dto.JobAdDto;
import com.example.ZariinApp.entities.JobAd;
import com.example.ZariinApp.exception.ResourceNotFoundException;
import com.example.ZariinApp.mappers.JobAdMapper;
import com.example.ZariinApp.repositories.JobAdRepository;
import com.example.ZariinApp.services.JobAdService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class JobAdServiceImpl implements JobAdService {
    private JobAdRepository jobAdRepository;
    @Override
    public JobAdDto createJobAd(JobAdDto jobAdDto) {
        JobAd jobAd = JobAdMapper.mapToJobAd(jobAdDto);
        JobAd savedJobAd = jobAdRepository.save(jobAd);
        return JobAdMapper.mapToJobAdDto(savedJobAd);
    }

    @Override
    public JobAdDto getJobAdById(Long jobAdId) {
        JobAd jobAd = jobAdRepository
                .findById(jobAdId)
                .orElseThrow( () ->
                        new ResourceNotFoundException("Job ad with id: " + jobAdId + " does not exist"));
        return JobAdMapper.mapToJobAdDto(jobAd);
    }

    @Override
    public List<JobAdDto> getAllJobAd() {
        List<JobAd> jobAdDtoList = jobAdRepository
                .findAll();


        return jobAdDtoList.stream()
                .map(JobAdMapper::mapToJobAdDto)
                .toList();
    }

    @Override
    public JobAdDto updateJobAd(Long jobAdId, JobAdDto updatedJobAd) {
        JobAd jobAd = jobAdRepository
                .findById(jobAdId)
                .orElseThrow(()->
                        new ResourceNotFoundException("Job ad with id: " + jobAdId + " does not exist"));
        jobAd.setAddress(updatedJobAd.getAddress());
        jobAd.setCompanyName(updatedJobAd.getCompanyName());
        jobAd.setDescription(updatedJobAd.getDescription());
        jobAd.setHiringPosition(updatedJobAd.getHiringPosition());
        jobAd.setHourlyPay(updatedJobAd.getHourlyPay());
        JobAd updatedJobAdObject = jobAdRepository.save(jobAd);

        return JobAdMapper.mapToJobAdDto(updatedJobAdObject);
    }

    @Override
    public void deleteJobAd(Long jobAdId) {
        JobAd jobAd = jobAdRepository
                .findById(jobAdId)
                .orElseThrow( ()->
                new ResourceNotFoundException("Job ad with id: " + jobAdId + " does not exist"));
        jobAdRepository.delete(jobAd);
    }
}
