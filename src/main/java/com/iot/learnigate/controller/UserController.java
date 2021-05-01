package com.iot.learnigate.controller;

import com.iot.learnigate.entity.Course;
import com.iot.learnigate.entity.Path;
import com.iot.learnigate.entity.SocialMedia;
import com.iot.learnigate.entity.User;
import com.iot.learnigate.service.UserService;
import java.util.*;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/add")
    public ResponseEntity addPath(@RequestBody List<String> keywords, @RequestParam String username, @RequestParam String pathName) {
        User user = service.findByUsername(username);
        Path path = new Path();

        List<Course> courses = service.findAllCourses();
        List<SocialMedia> socialMedias = service.findAllSocialMedias();

        List<Course> coursesForAdding = new ArrayList<>();
        List<SocialMedia> socialMediaForAdding = new ArrayList<>();

        for (String keyword : keywords) {
            coursesForAdding.addAll(courses.stream().filter(
                course -> course.getName().equalsIgnoreCase(keyword)
            ).collect(Collectors.toList()));
            socialMediaForAdding.addAll(socialMedias.stream().filter(
                socialMedia -> socialMedia.getProfile().equalsIgnoreCase(keyword)
            ).collect(Collectors.toList()));
        }

        path.setCourses(coursesForAdding);
        path.setSocialMedias(socialMediaForAdding);
        path.setPathName(pathName);

        Path createdPath = service.savePath(path);

        List<Path> paths = user.getPaths();
        paths.add(createdPath);

        user.setPaths(paths);

        service.saveUpdatedUser(user);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
