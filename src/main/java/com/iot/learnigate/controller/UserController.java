package com.iot.learnigate.controller;

import com.iot.learnigate.entity.User;
import com.iot.learnigate.service.UserService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController("/user")
public class UserController {
    @Autowired
    private UserService service;

    //@GetMapping
    //public List<User> findAll() {
    //    return service.findAll();
    //}

    @GetMapping
    public User findByUsername(@RequestParam String username) {
        return service.findByUsername(username);
    }
}
