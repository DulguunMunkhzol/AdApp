package com.example.ZariinApp.repositories;

import com.example.ZariinApp.entities.JobAd;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface JobAdRepository extends JpaRepository<JobAd, Long> {

    @Query("SELECT j FROM JobAd j " +
            "WHERE LOWER(j.companyName) LIKE LOWER(CONCAT('%', :search, '%')) " +
            "OR LOWER(j.address) LIKE LOWER(CONCAT('%', :search, '%')) " +
            "OR LOWER(j.hiringPosition) LIKE LOWER(CONCAT('%', :search, '%')) " +
            "OR STR(j.hourlyPay) LIKE CONCAT('%', :search, '%')")
    List<JobAd> searchByString(@Param("search") String search, Pageable pageable);
}
