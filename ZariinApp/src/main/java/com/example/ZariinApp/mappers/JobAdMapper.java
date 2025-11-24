package com.example.ZariinApp.mappers;

import com.example.ZariinApp.dto.JobAdDto;
import com.example.ZariinApp.entities.JobAd;

public class JobAdMapper {
    public static JobAdDto mapToJobAdDto(JobAd jobAd){
        return new JobAdDto(
                jobAd.getId(),
                jobAd.getCompanyName(),
                jobAd.getAddress(),
                jobAd.getHiringPosition(),
                jobAd.getDescription(),
                jobAd.getHourlyPay()
        );
    }
    public static JobAd mapToJobAd(JobAdDto jobAdDto){
        return new JobAd(
                jobAdDto.getId(),
                jobAdDto.getCompanyName(),
                jobAdDto.getAddress(),
                jobAdDto.getHiringPosition(),
                jobAdDto.getDescription(),
                jobAdDto.getHourlyPay()
        );
    }
}
