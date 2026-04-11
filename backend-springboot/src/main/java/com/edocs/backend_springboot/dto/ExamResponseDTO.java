package com.edocs.backend_springboot.dto;

import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ExamResponseDTO {

    private String exam;
    private String exam_code;
    private List<DocumentDTO> documents;
}