package com.example.ZariinApp.controller;

import com.example.ZariinApp.dto.JobAdDto;
import com.example.ZariinApp.services.JobAdService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("api/jobAd")
@CrossOrigin(origins="http://localhost:3000")
public class JobAdController {

    private final JobAdService jobAdService;

    @PostMapping
    public ResponseEntity<JobAdDto> createJobAd(@RequestBody JobAdDto jobAdDto){
        JobAdDto saveJobAdDto = jobAdService.createJobAd(jobAdDto);
        return new ResponseEntity<>(saveJobAdDto, HttpStatus.CREATED);
    }
    @GetMapping("{id}")
    public ResponseEntity<JobAdDto> getJobAdById(@PathVariable("id") Long jobAdId){
        JobAdDto jobAdDto = jobAdService.getJobAdById(jobAdId);
        return ResponseEntity.ok(jobAdDto);
    }
    @GetMapping
    public ResponseEntity<List<JobAdDto>> getAllJobAds(){
        List<JobAdDto> jobAdDtos = jobAdService.getAllJobAd();
        return ResponseEntity.ok(jobAdDtos);
    }

    @PutMapping("{id}")
    public ResponseEntity<JobAdDto> updateJobAdById(@PathVariable("id") Long jobAdId,
                                                    @RequestBody JobAdDto updatedJobAdDto){
        JobAdDto jobAdDto = jobAdService.updateJobAd(jobAdId,updatedJobAdDto);
        return ResponseEntity.ok(jobAdDto);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteJobById(@PathVariable("id") Long jobAdId){
        jobAdService.deleteJobAd(jobAdId);
        return ResponseEntity.ok("Job Ad deleted Successfully");
    }

}
