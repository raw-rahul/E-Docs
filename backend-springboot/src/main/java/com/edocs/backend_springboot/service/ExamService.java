package com.edocs.backend_springboot.service;

import com.edocs.backend_springboot.dto.DocumentDTO;
import com.edocs.backend_springboot.dto.ExamResponseDTO;
import com.edocs.backend_springboot.model.DocumentConstraint;
import com.edocs.backend_springboot.model.Exam;
import com.edocs.backend_springboot.repository.DocumentConstraintRepository;
import com.edocs.backend_springboot.repository.ExamRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ExamService {

    private final ExamRepository examRepository;
    private final DocumentConstraintRepository docRepository;

    public ExamService(ExamRepository examRepository,
                       DocumentConstraintRepository docRepository) {
        this.examRepository = examRepository;
        this.docRepository = docRepository;
    }

    public List<Exam> getAllExams() {
        return examRepository.findAll();
    }

    public ExamResponseDTO getExamDetails(String keyword) {

        Exam exam = examRepository
                .searchExam(keyword)
                .orElseThrow(() -> new RuntimeException("Exam not found"));

        List<DocumentConstraint> constraints = docRepository.findByExam(exam);

        List<DocumentDTO> docs = constraints.stream()
                .map(c -> new DocumentDTO(
                        c.getDocumentType(),
                        c.getAllowedFormats(),
                        c.getMinSizeKb(),
                        c.getMaxSizeKb(),
                        c.getWidthPx(),
                        c.getHeightPx()
                ))
                .toList();

        return new ExamResponseDTO(
                exam.getExamName(),
                exam.getExamCode(),
                docs
        );
    }
}