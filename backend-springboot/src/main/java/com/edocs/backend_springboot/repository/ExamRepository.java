package com.edocs.backend_springboot.repository;

import com.edocs.backend_springboot.model.Exam;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ExamRepository extends JpaRepository<Exam, Long> {

    @Query("""
        SELECT e FROM Exam e
        WHERE LOWER(e.examName) LIKE LOWER(CONCAT('%', :keyword, '%'))
        OR LOWER(e.examCode) LIKE LOWER(CONCAT('%', :keyword, '%'))
    """)
    Optional<Exam> searchExam(String keyword);
}