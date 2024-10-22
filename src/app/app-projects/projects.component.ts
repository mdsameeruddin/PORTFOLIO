import { Component } from '@angular/core';

interface Project {
  imageUrl: string;
  projectName: string;
  technologyUsed: string;
  projectDescription: string;
}



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects: Project[] = this.projectDetails();

  scrollToProjects() {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  profileImage = '/assets/DP3.png';
 
  projectDetails(): Project[] {
    return [ 
      {
        // portfo/src/assets/resume/IMG_20240620_125438.jpg
        projectName: "Health Helpline (HHL) Government Project",
        technologyUsed: "Java SE 8, Spring Boot, Angular 8, Apache Tomcat 9, PostgreSQL, Windows",
        projectDescription: "Developed and maintained a platform facilitating seamless communication between patients and healthcare professionals for timely consultations. Responsibilities included designing and developing both front-end and back-end components, creating the User Interface (UI) for the dashboard using Angular 8, and ensuring project scope completion within sprints.",
        imageUrl: '/assets/resume/IMG_20240709_182855.jpg'
      },
      {
       
        projectName: "RISE (US Bank EMIs)",
        technologyUsed: "Java SE 8, Spring Boot, Angular 8, Apache Tomcat 9, Windows 10",
        projectDescription: "Managed the handling of Equated Monthly Installments (EMIs) for prominent clients, ensuring timely processing and accurate calculation of installment payments. Responsibilities included following Agile methodology, designing and developing both frontend and backend components, creating APIs and building them as RESTful web services, and splitting APIs into microservices.",
        imageUrl: '/assets/resume/IMG_20240620_125520.jpg'
      },
      {
        
        projectName: "VANTAGE",
        technologyUsed: "Java SE 8, Spring Boot, Angular 8, Apache Tomcat 9, Windows 10",
        projectDescription: "Vantage-Point (SSO) is a multifactor authenticator with 2 or 4 levels of authentication, including Single Sign-On (SSO) feature, allowing users to access multiple applications with their credentials. Responsibilities included designing and developing frontend and backend components, creating Multi-Factor Authentication Service, migrating solutions, resolving production hotfixes, and developing the dashboard UI with Angular 8.",
        imageUrl: '/assets/resume/IMG-20240607-WA0003.jpg'
      },
      {
        
        projectName: "Pidgin (Immediate Payment Service)",
        technologyUsed: "Java SE 8, Spring Boot, Angular 6, Apache Camel (HTTP), ISO 20022, JMS, RabbitMQ, PostgreSQL, Apache Tomcat 9, Windows 10",
        projectDescription: "Pidgin is an instant payment system in India that follows NPCI specifications for P2A and P2P payments. Responsibilities included developing MMID generation, integrating with Core Banking and Mobile Banking systems, designing and developing frontend and backend components, completing project scopes within sprints, and developing the dashboard UI using Angular 6.",
        imageUrl: '/assets/resume/IMG_20240620_125438.jpg'
      }
    
    ];
  }

}