package com.edocs.backend_springboot.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "document_constraints")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DocumentConstraint {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "document_type")
    private String documentType;

    @Column(name = "allowed_formats")
    private String allowedFormats;

    @Column(name = "min_size_kb")
    private Integer minSizeKb;

    @Column(name = "max_size_kb")
    private Integer maxSizeKb;

    @Column(name = "width_px")
    private Integer widthPx;

    @Column(name = "height_px")
    private Integer heightPx;

    @ManyToOne
    @JoinColumn(name = "exam_id")
    private Exam exam;
}