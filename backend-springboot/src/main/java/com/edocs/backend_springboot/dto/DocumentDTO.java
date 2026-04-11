package com.edocs.backend_springboot.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DocumentDTO {

    private String document_type;
    private String allowed_formats;
    private Integer min_size_kb;
    private Integer max_size_kb;
    private Integer width_px;
    private Integer height_px;
}