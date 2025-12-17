package com.example.ZariinApp.services.impl;

import com.example.ZariinApp.dto.JobAdDto;
import com.example.ZariinApp.entities.JobAd;
import com.example.ZariinApp.exception.ResourceNotFoundException;
import com.example.ZariinApp.mappers.JobAdMapper;
import com.example.ZariinApp.repositories.JobAdRepository;
import com.example.ZariinApp.services.JobAdService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;

@Service
@Transactional
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
    @Transactional(readOnly = true)
    public JobAdDto getJobAdById(Long jobAdId) {
        JobAd jobAd = jobAdRepository
                .findById(jobAdId)
                .orElseThrow( () ->
                        new ResourceNotFoundException("Job ad with id: " + jobAdId + " does not exist"));
        return JobAdMapper.mapToJobAdDto(jobAd);
    }

    @Override
    @Transactional(readOnly = true)
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
        jobAd.setEmail(updatedJobAd.getEmail());
        jobAd.setPhoneNumber(updatedJobAd.getPhoneNumber());
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
    @Override
    public Page<JobAdDto> getJobAdsByString(String search, int page, int size){

        Page<JobAd> jobAdsPage;
        Pageable pageable = PageRequest.of(page, size, Sort.by("id").ascending());

        if(search == null || search.isBlank()){
            jobAdsPage = jobAdRepository.findAll(pageable);
        }else{
            jobAdsPage = jobAdRepository.searchByString(search, pageable);
        }


        return jobAdsPage.map(JobAdMapper::mapToJobAdDto);
    }
}
