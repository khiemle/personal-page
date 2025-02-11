export interface PersonalInfo {
    name: string;
    title: string;
    location: string;
    email: string;
    github: string;
}

export interface About {
    description: string;
    goals: string;
}

export interface Experience {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    responsibilities: string[];
}

export interface Education {
    degree: string;
    institution: string;
    startDate: string;
    endDate: string;
}

export interface Skill {
    name: string;
    level: string;
}

export interface Project {
    name: string;
    description: string;
    link: string;
}

export interface Contact {
    email: string;
    github: string;
}

export interface Profile {
    personalInfo: PersonalInfo;
    about: About;
    experience: Experience[];
    education: Education[];
    skills: Skill[];
    projects: Project[];
    contact: Contact;
}
