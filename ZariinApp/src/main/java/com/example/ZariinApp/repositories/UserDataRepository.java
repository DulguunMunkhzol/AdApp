package com.example.ZariinApp.repositories;

import com.example.ZariinApp.entities.UserData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDataRepository extends JpaRepository<UserData, Long> {
}
