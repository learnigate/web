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
import org.springframework.beans.factory.annotation.Autowired;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao userRepository;
    @Autowired
    private CourseDao courseDao;
    @Autowired
    private SocialMediaDao socialMediaDao;
    @Autowired
    private PathDao pathDao;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
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
            userRepository.save(user);
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return userRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    @Override
    public String signUpUser(User user) {
        boolean userExists = userRepository
                .findByEmail(user.getEmail())
                .isPresent();
        if (userExists) {
            throw new IllegalStateException("User already exists");
        }

        String encodedPassword = bCryptPasswordEncoder
                .encode(user.getPassword());

        user.setPassword(encodedPassword);

        userRepository.save(user);
        return "registered";
    }

    @Override
    public int enableUser(String email) {
        return userRepository.enableUser(email);
    }

    @Override
    public Path savePath(Path path) {
        return pathDao.save(path);
    }

}
