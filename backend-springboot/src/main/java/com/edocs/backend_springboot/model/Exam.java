package com.edocs.backend_springboot.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "exams")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Exam {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "exam_code")
    private String examCode;

    @Column(name = "exam_name")
    private String examName;
}