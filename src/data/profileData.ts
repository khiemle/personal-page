import { Profile } from "@/models/Profile";

export const profileData: Profile = {
    personalInfo: {
        name: "Khiem Le",
        title: "Mobile Engineer",
        location: "Ho Chi Minh City, Vietnam",
        email: "khiemlq@gmail.com",
        github: "" // GitHub not provided in the PDF
    },
    about: {
        description: "My goal in joining this company is to work in a positive and stimulating environment that encourages continuous learning and growth.",
        goals: "Gain the skills and knowledge necessary to eventually own my own business and have more control over my time."
    },
    experience: [
        {
            company: "Axon",
            position: "Senior Android Developer",
            startDate: "July 2021",
            endDate: "Present",
            responsibilities: [
                "Developing connected public safety technologies.",
                "Supporting mission to protect life and ensure fairness in the justice system."
            ]
        },
        {
            company: "PYCOGroup",
            position: "Senior Android Developer",
            startDate: "November 2020",
            endDate: "June 2021",
            responsibilities: [
                "Developing new features and fixing bugs for GoPay Team.",
                "Collaborating with teams on large-scale projects and super apps.",
                "Exploring Flutter for new app development and managing project structure."
            ]
        },
        {
            company: "Freelance",
            position: "Flutter Developer",
            startDate: "June 2020",
            endDate: "November 2020",
            responsibilities: [
                "Developed a food services product from scratch using Flutter and BLoC architecture.",
                "Handled UI development and project architecture."
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
            position: "Software Engineer, Android",
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
                "Managed Android development processes and built company products.",
                "Researched and applied new Android SDK APIs."
            ]
        }
        // Additional experiences can be added here similarly
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
        { name: "Kotlin", level: "" }
    ],
    projects: [
        {
            name: "Food Services Product",
            description: "A Flutter-based application to facilitate food orders and party services.",
            link: "" // No specific link provided
        }
    ],
    contact: {
        email: "khiemlq@gmail.com",
        github: "" // GitHub not provided
    }
};