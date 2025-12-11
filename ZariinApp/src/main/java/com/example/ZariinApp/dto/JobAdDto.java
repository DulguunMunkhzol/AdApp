package com.example.ZariinApp.dto;

import jakarta.validation.constraints.*;
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
    @NotBlank(message = "company name required")
    private String companyName;
    @NotBlank(message = "address required")
    private String address;
    @NotBlank(message = "hiringPosition required")
    private String hiringPosition;
    @NotBlank(message = "description required")
    private String description;
    @Positive(message = "hourly Pay must be positive")
    @NotNull(message = "hourlyPay required")
    private BigDecimal hourlyPay;
    @NotBlank(message = "email required")
    @Email(message = "invalid email")
    private String email;
    @NotBlank(message = "phone number is required")
    @Pattern(regexp = "\\+?\\d{10,15}", message = "invalid phone number")
    private String phoneNumber;

}
