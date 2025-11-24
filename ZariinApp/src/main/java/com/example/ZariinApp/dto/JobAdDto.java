package com.example.ZariinApp.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class JobAdDto {
    private long id;
    private String companyName;
    private String address;
    private String hiringPosition;
    private String description;
    private BigDecimal hourlyPay;

}
