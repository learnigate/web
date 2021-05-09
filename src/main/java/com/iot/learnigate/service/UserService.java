package com.iot.learnigate.service;

import com.iot.learnigate.entity.Course;
import com.iot.learnigate.entity.Path;
import com.iot.learnigate.entity.SocialMedia;
import com.iot.learnigate.entity.User;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface UserService extends UserDetailsService {
    List<User> findAll();
    User findByUsername(String username);
    List<Course> findAllCourses();
    List<SocialMedia> findAllSocialMedias();

    void saveUpdatedUser(User user);

    Path savePath(Path path);

    int enableUser(String email);
    String signUpUser(User user);
}
