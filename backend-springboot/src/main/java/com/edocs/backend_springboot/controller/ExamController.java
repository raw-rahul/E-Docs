package com.edocs.backend_springboot.controller;

import com.edocs.backend_springboot.dto.ExamResponseDTO;
import com.edocs.backend_springboot.model.Exam;
import com.edocs.backend_springboot.service.ExamService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ExamController {

    private final ExamService examService;

    public ExamController(ExamService examService) {
        this.examService = examService;
    }

    @GetMapping("/exams")
    public List<Exam> getAllExams() {
        return examService.getAllExams();
    }

    @GetMapping("/exam/{examName}")
    public ExamResponseDTO getExam(@PathVariable String examName) {
        return examService.getExamDetails(examName);
    }
}