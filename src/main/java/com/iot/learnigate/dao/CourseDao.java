package com.iot.learnigate.dao;

import com.iot.learnigate.entity.Course;
import java.util.Set;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseDao extends JpaRepository<Course, Long> {
}
