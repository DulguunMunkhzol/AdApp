package com.example.ZariinApp.repositories;

import com.example.ZariinApp.entities.JobAd;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobAdRepository extends JpaRepository<JobAd, Long> {
}
