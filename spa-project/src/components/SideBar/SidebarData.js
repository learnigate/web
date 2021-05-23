import React from 'react';
import * as IoIcons from 'react-icons/io';
import * as BiIcons from "react-icons/bi"

export var SidebarData = [
  {
    title: 'Profile',
    path: '/profile',
    icon: <BiIcons.BiUser />,

  },
  {
    title: 'Learning pathes',
    icon: <BiIcons.BiListUl />,
    iconClosed: <IoIcons.IoIosArrowDown />,
    iconOpened: <IoIcons.IoIosArrowUp />,

    subNav: [
    //   {
    //     title: 'Path 1',
    //     path: '/learning_pathes/path/1',
    //     icon: <BiIcons.BiNotepad />,
    //     cName: 'sub-nav',
    //     courses: {
    //       platform: 'Coursera', 
    //       name: 'Containers w/ Docker, Kubernetes & OpenShift', 
    //       startdate: '9 April 2021', 
    //       actions: ""},
    //       media: {
    //         platform: "Twitter", 
    //         person: "Charity Majors @mipsytipsy",
    //         bio: 'cofounder/CTO @honeycombio, co-wrote Database Reliability Engineering, loves whiskey, rainbows, and Friday deploys. I test in production and so do you. 🌈',
    //         actions: " "
    //       }
    //   },

    //   {
    //     title: 'Path 2',
    //     path: '/learning_pathes/path/2',
    //     icon: <BiIcons.BiNotepad/>,
    //     cName: 'sub-nav',
    //     courses: {
    //       platform: 'Coursera', 
    //       name: 'Containers w/ Docker, Kubernetes & OpenShift', 
    //       startdate: '9 April 2021', 
    //       actions: " "},
    //     media: {
    //       platform: "Twitter", 
    //       person: "Charity Majors @mipsytipsy",
    //       bio: 'cofounder/CTO @honeycombio, co-wrote Database Reliability Engineering, loves whiskey, rainbows, and Friday deploys. I test in production and so do you. 🌈',
    //       actions: " "
    //     }
    //   },
    //   {
    //     title: 'path 3',
    //     path: '/learning_pathes/path/3',
    //     icon: <BiIcons.BiNotepad />,
    //     courses: {
    //       platform: 'Coursera', 
    //       name: 'Containers w/ Docker, Kubernetes & OpenShift', 
    //       startdate: '9 April 2021', 
    //       actions: " "},
    //       media: {
    //         platform: "Twitter", 
    //         person: "Charity Majors @mipsytipsy",
    //         bio: 'cofounder/CTO @honeycombio, co-wrote Database Reliability Engineering, loves whiskey, rainbows, and Friday deploys. I test in production and so do you. 🌈',
    //         actions: " "
    //       }
    //   }
    ]
  },
  {
    title: 'Statistics',
    path: '/statistics',
    icon: <BiIcons.BiBarChartAlt2 />
  }
];