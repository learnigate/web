package com.iot.learnigate.entity;

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
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String provider;
    @Column
    private String name;
    @Column
    private Double rating;
    @Column
    private Double difficulty;
    @Column
    String link;
}
