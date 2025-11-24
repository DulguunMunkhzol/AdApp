package com.example.ZariinApp.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Publisher {

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private long id;

    @Column(length = 255,nullable = false)
    private String companyName;

    @Column(length = 255,nullable=false,unique = true)
    private String email;
    @Column(length=255,nullable = false)
    private String firstName;
    @Column(length = 255, nullable=false)
    private String lastName;
    @Column(length=255,nullable=false)
    private String password;
}
