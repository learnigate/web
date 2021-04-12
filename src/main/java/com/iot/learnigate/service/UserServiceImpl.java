package com.iot.learnigate.service;

import com.iot.learnigate.dao.UserDao;
import com.iot.learnigate.entity.User;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao dao;

    @Override
    public List<User> findAll() {
        return dao.findAll();
    }

    @Override
    public User findByUsername(String username) {
        return dao.findByUsername(username);
    }
}
