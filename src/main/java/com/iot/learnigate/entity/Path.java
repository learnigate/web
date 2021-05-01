package com.iot.learnigate.entity;

import java.util.List;
import java.util.Set;
import javax.persistence.*;
import lombok.*;

@Entity
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@EqualsAndHashCode
public class Path {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String pathName;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
        name = "path_course",
        joinColumns = {@JoinColumn(name = "path_id")},
        inverseJoinColumns = {@JoinColumn(name = "course_id")})
    private List<Course> courses;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
        name = "path_social_media",
        joinColumns = {@JoinColumn(name = "path_id")},
        inverseJoinColumns = {@JoinColumn(name = "socialmedia_id")})
    private List<SocialMedia> socialMedias;

}
