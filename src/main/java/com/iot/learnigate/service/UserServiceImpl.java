package com.iot.learnigate.service;

import com.iot.learnigate.dao.CourseDao;
import com.iot.learnigate.dao.PathDao;
import com.iot.learnigate.dao.SocialMediaDao;
import com.iot.learnigate.dao.UserDao;
import com.iot.learnigate.entity.Course;
import com.iot.learnigate.entity.Path;
import com.iot.learnigate.entity.SocialMedia;
import com.iot.learnigate.entity.User;
import java.util.List;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao userDao;
    @Autowired
    private CourseDao courseDao;
    @Autowired
    private SocialMediaDao socialMediaDao;
    @Autowired
    private PathDao pathDao;

    @Override
    public List<User> findAll() {
        return userDao.findAll();
    }

    @Override
    public User findByUsername(String username) {
        return userDao.findByUsername(username);
    }

    @Override
    public List<Course> findAllCourses() {
        return courseDao.findAll();
    }

    @Override
    public List<SocialMedia> findAllSocialMedias() {
        return socialMediaDao.findAll();
    }

    @Override
    public void saveUpdatedUser(User user) {
        userDao.save(user);
    }

    @Override
    public Path savePath(Path path) {
        return pathDao.save(path);
    }

}
