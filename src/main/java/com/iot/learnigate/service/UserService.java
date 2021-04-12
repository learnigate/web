package com.iot.learnigate.service;

import com.iot.learnigate.entity.User;
import java.util.List;

public interface UserService {
    List<User> findAll();
    User findByUsername(String username);
}
