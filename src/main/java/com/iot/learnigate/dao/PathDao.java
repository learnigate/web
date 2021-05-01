package com.iot.learnigate.dao;

import com.iot.learnigate.entity.Path;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PathDao extends JpaRepository<Path, Long> {
}
