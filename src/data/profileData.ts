import { Profile } from "@/models/Profile";

export const profileData: Profile = {
    personalInfo: {
        name: "Khiem Le",
        title: "Senior Software Engineer",
        location: "Ho Chi Minh City, Vietnam",
        email: "khiemlq@gmail.com",
        github: "https://github.com/khiemle"
    },
    about: {
        description: "My goal in joining this company is to work in a positive and stimulating environment that encourages continuous learning and growth. I hope to contribute my past experiences and skills towards creating value for the company.",
        goals: "In addition, I am looking forward to opportunities for professional development and advancement within the company over time. While I am not necessarily seeking a specific position within the IT industry, my ultimate goal is to gain the skills and knowledge necessary to eventually own my own business and have more control over my time."
    },
    experience: [
        {
            company: "Axon",
            position: "Senior Android Developer",
            startDate: "July 2021",
            endDate: "Present",
            responsibilities: [
                "With over 26 years of advancing technology, Axon is dedicated to a bold and powerful mission to Protect Life and Obsolete the Bullet. Axon is the global leader of connected public safety technologies. We stand for protecting life, protecting truth, transparency, and accountability. Rick Smith founded Axon (formerly TASER International) following the deaths of two high school friends who were gunned down in an act of road rage. This tragedy sparked a passion in Rick to seek new technologies that would enable people to protect themselves without deploying lethal force. Our connected body-worn camera technology and evidence-management cloud are designed to help police officers work efficiently actively and transparently. Axon’s mission from the start has been to make the bullet obsolete, reduce social conflict and ensure criminal justice systems are fair and effective. Following recent events, we have added one more: *Eradicate racism and excessive force in the justice system.*",
                "We are currently hiring for all positions across all 17 countries, including the offices in Scottsdale, Seattle, London, Amsterdam, New York City, Sydney, Ho Chi Minh City, and Tampere. To join our team: https://www.axon.com/careers"
            ]
        },
        {
            company: "PYCOGroup",
            position: "Senior Android Developer",
            startDate: "November 2020",
            endDate: "June 2021",
            responsibilities: [
                "I am an Android Engineer in Pyco Group's partnership program with Gojek called GoPay Team, based in Vietnam. My work involves developing new features and fixing bugs, as well as documenting my work and collaborating with other teams to overcome challenges and obstacles.",
                "Working at GoPay Team has given me the opportunity to work on large-scale projects, including the development of a super app with multiple modules and complex automated processes. In addition to coding, I have learned about the development process, pair programming, and the engineering culture at GoPay's mobile engineering team.",
                "My manager at GoPay Team is Mr. Xuân Nguyễn, who can be contacted at xuanusm@gmail.com for further information.",
                "As part of my work at GoPay Team, I was involved in the spike project to explore what Flutter could do for a new app built using the framework. During this project, I was responsible for initializing the project structure, managing themes, fonts, and translations, creating documentation to help Flutter beginners transition from Kotlin to Dart, gaining a deeper understanding of Flutter's default widgets and state management, writing unit tests and creating mock helpers for test cases and instances, and using native plugins and the method channel, as well as the new Flutter 2 feature of multiple engines in an app. I also used Dev-tools for debugging, inspecting layouts, and checking performance."
            ]
        },
        {
            company: "Freelance",
            position: "Flutter Developer",
            startDate: "June 2020",
            endDate: "November 2020",
            responsibilities: [
                "My project is a Food services product, It help user make food orders or all in one service like party, manage cart, proceed to checkout, input delivery address...",
                "I and another teammate had started project this project from scratch, at that time, we decided to use BLoC architecture, Flutter BLoC library helps to manage and manipulate state to Widgets and Screen. ",
                `
                What I made the value for this project:
                - Save the cost for iOS side 
                - Speed up UI development, make UI consistent for both Android and iOS app when decide to use Flutter framework
                - Contribute to build Architecture, separate data, domain, UI layer
                - Because the scopes of this project, so we can delivered app without know much about Native code, just need to know Dart language and Flutter framework
                `,
                `
                What painful things I have been facing:
                - Need to understand How to delivered iOS app
                - Have some technical debt when serialize, deserialize JSON data, mapping data from lower layer to higher layer
                - Restructure project source code
                - Updated BLoC library from 5 to 6
                - Currently, I was facing some libraries don't work with Flutter 2
                `
            ]
        },
        {
            company: "Wizeline",
            position: "Frontend Developer",
            startDate: "November 2019",
            endDate: "November 2020",
            responsibilities: [
                "Developed The Australian Android app.",
                "Researched Flutter and applied Bloc architecture to projects."
            ]
        },
        {
            company: "Wizeline",
            position: "Senior Software Engineer, Android",
            startDate: "November 2018",
            endDate: "November 2020",
            responsibilities: [
                "Contributed to Android app development and participated in GCP Bootcamp."
            ]
        },
        {
            company: "Mingle VietNam",
            position: "Android Leader",
            startDate: "July 2014",
            endDate: "November 2018",
            responsibilities: [
                "I joined this company from beginning. Manage all process relate to Android Development of company.",
                "Build company products and create apps frameworks/base, building process to create apps in short times.",
                "Research and apply new Android SDK API for Android Projects.",
                "Using Ruby script to build app, and create apps from base source code.",
                "Guiding and training Git for team members.",
                "Building architecture for Android Projects of Company.",
                "Profile Applications: detect overdraw, out of memory, improve performance of apps, decrease APK size.",
                "Manage team, manage building process, release process, dev testing process.",
                "Be leader of Android team, I always give solution, solve problems, make decision with team also push team member to archive goals, give them motivation.",
                "Ready for using Kotlin, Android Architecture Components, RxJava2.",
                "Auto build, manage Code Quality, apply checkstyle, pmd to check the source code.",
                "Have Code review project, pull request process.",
                "Used CircleCI to build and verify all change thing, make sure all commit code are solid.",
                "Used Fastlane to delivery build for QC team, release to Google Play."
            ]
        },
        {
            company: "Defide Saigon",
            position: "Senior Android Developer",
            startDate: "Feb 2013",
            endDate: "Jun 2014",
            responsibilities: [
                "Maintain and continue to develop current project of company.",
                "I worked on projects: TOUCH, YHO, YAD, YAD Mobile. The projects relate to online shopping.",
                "Develop feature to use iBeacon technology.",
                "Avoid Memory Leak, avoid Out Of Memory for android application.",
                "Working with animation.",
                "Custom views."
            ]
        },

        {
            company: "Tech Propulsion Labs",
            position: "Mobile developer",
            startDate: "July 2012",
            endDate: "Feb 2013",
            responsibilities: [
                "Learnt to code iOS app with Objective C. My iOS projects: Music Player, London Remember.",
                "Develop chat application using XMPP protocol.",
                "Research to split video.",
                "Using QR library."
            ]
        },

        {
            company: "GNT Vietnam",
            position: "Android Developer",
            startDate: "April 2011",
            endDate: "Jun 2012",
            responsibilities: [
                "Develop Lyric Player app: show lyric of song, and play lyric like karaoke, let user create and submit the lyrics and share with another user.",
                "Be a leader to manage the project Mobion Share. This is chat application, provide users sign up/login with another social network, send text/video/audio message to friend.",
                "Images caching on Android.",
                "Resolve the problems relate to concurrency when write to SQLite.",
                "Using GPS, Google Maps, In App Purchase.",
                "Using Facebook SDK.",
                "Develop Mobion Music app, recognize music in coffee shop, public place.",
                "Understand more about Activities/Fragments life cycle."
            ]
        },

        {
            company: "TMA Solutions",
            position: "Mobile developer",
            startDate: "Jun 2010",
            endDate: "April 2011",
            responsibilities: [
                "Join and learn about current Symbian project of company.",
                "C/C++ - Symbian C/C++, IDE: Carbide C++, Qt creator.",
                "Symbian SDK."
            ]
        }

    ],
    education: [
        {
            degree: "Bachelor’s Degree",
            institution: "VNUHCM - University of Science",
            startDate: "2006",
            endDate: "2010"
        }
    ],
    skills: [
        { name: "Android", level: "" },
        { name: "Android Development", level: "" },
        { name: "Kotlin", level: "" },
        { name: "Python", level: "" },
        { name: "CI/CD", level: "" },
        { name: "Automation scripts", level: "" },
    ],
    projects: [
        {
            name: "Axon App",
            description: "Axon App is a mobile application that allows users to access Axon's services and products. The app is available on both Android and iOS platforms. This project is built with Jetpack compose",
            link: "https://play.google.com/store/apps/details?id=com.axon.one"
        },

        {
            name: "Axon Respond",
            description: "Axon Respond is a mobile application that allows users to watch live stream from Axon's camera devices Axon Body Camera, Fleet, Axon Air. I started this project from scratch. I used the MVVM architecture pattern, explored WebRTC, and implemented the camera live stream feature.",
            link: "https://play.google.com/store/apps/details?id=com.axon.apollo"
        },

    ],
    contact: {
        email: "khiemlq@gmail.com",
        github: "https://github.com/khiemle",
        linkedin: "https://www.linkedin.com/in/khiemlq/"
    }
};