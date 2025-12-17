package com.example.ZariinApp.dto;

import java.util.List;

public record PageResponse<T>(
        List<T> content,
        int page,           // current page number
        int size,           // page size
        long totalElements, // total items across all pages
        int totalPages,     // total pages
        boolean first,
        boolean last
) {
    // Factory method to convert from Spring Page<T>
    public static <T> PageResponse<T> from(org.springframework.data.domain.Page<T> pageData) {
        return new PageResponse<>(
                pageData.getContent(),
                pageData.getNumber(),
                pageData.getSize(),
                pageData.getTotalElements(),
                pageData.getTotalPages(),
                pageData.isFirst(),
                pageData.isLast()
        );
    }
}
