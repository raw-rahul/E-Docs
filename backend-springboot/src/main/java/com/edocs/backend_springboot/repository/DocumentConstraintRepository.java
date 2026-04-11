package com.edocs.backend_springboot.repository;

import com.edocs.backend_springboot.model.DocumentConstraint;
import com.edocs.backend_springboot.model.Exam;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DocumentConstraintRepository extends JpaRepository<DocumentConstraint, Long> {

    List<DocumentConstraint> findByExam(Exam exam);
}