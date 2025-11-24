package com.example.ZariinApp.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class JobAd {

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private long id;

    @Column(length = 255,nullable = false)
    private String companyName;

    @Column(length=255,nullable = false)
    private String address;
    @Column(length = 255,nullable = false)
    private String hiringPosition;
    @Column(length = 5000, nullable = false)
    private String description;
    @Column(nullable = false)
            @Min(2)
    private BigDecimal hourlyPay;


}
