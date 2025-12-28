package com.example.ZariinApp.services;

import com.example.ZariinApp.dto.JobAdDto;
import com.example.ZariinApp.entities.JobAd;
import com.example.ZariinApp.exception.ResourceNotFoundException;
import com.example.ZariinApp.repositories.JobAdRepository;
import com.example.ZariinApp.services.impl.JobAdServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class JobAdServiceImplTest {
    @Mock
    private JobAdRepository jobAdRepository;



    @InjectMocks
    private JobAdServiceImpl jobAdService;

    @Test
    void createJobAd_shouldSaveAndReturnDto(){

        JobAdDto inputDto = new JobAdDto();
        inputDto.setAddress("huya");
        inputDto.setCompanyName("muka");

        JobAd savedEntity = new JobAd();
        savedEntity.setId(1);
        savedEntity.setAddress("huya");
        savedEntity.setCompanyName("muka");

        when(jobAdRepository.save(any(JobAd.class))).thenReturn(savedEntity);

        JobAdDto result = jobAdService.createJobAd(inputDto);

        assertNotNull(result);
        assertEquals("huya", result.getAddress());
        assertEquals("muka",result.getCompanyName());

        verify(jobAdRepository, times(1)).save(any(JobAd.class));
    }

    @Test
    void getJobAdDtoById_shouldReturnDto(){
        long idSearch = 1;
        JobAd entity = new JobAd(
                1,"company",
                "address",
                "hiringPosition",
                "description",
                BigDecimal.valueOf(123.02),
                "email@gmail.com",
                "1234567890"
        );

        when(jobAdRepository.findById(idSearch)).thenReturn(Optional.of(entity));

        JobAdDto result = jobAdService.getJobAdById(idSearch);

        assertNotNull(result);
        assertEquals("company", result.getCompanyName());
        assertEquals(0, result.getHourlyPay().compareTo(BigDecimal.valueOf(123.02)));

        verify(jobAdRepository, times(1)).findById(idSearch);
        verifyNoMoreInteractions(jobAdRepository);
    }

    @Test
    void getJobAdDtoById_WhenNotFound_ShouldThrowException(){
        long idSearch=1;
        when(jobAdRepository.findById(idSearch)).thenReturn(Optional.empty());
        assertThrows(ResourceNotFoundException.class, ()-> jobAdService.getJobAdById(idSearch));
        verify(jobAdRepository, times(1)).findById(idSearch);
        verifyNoMoreInteractions(jobAdRepository);
    }
}
