import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  details = [
    {
      companyLogo: "/assets/neptune-logo.jpg",
      companyName: "Neptune Information Solution Ltd",
      date: "June 2021 - Aug 2024",
      description: `
        Developed scalable backend systems using Java, Spring Boot, and Microservices architecture. <br>
        Implemented RESTful APIs with Spring Boot, ensuring secure access using Spring Security and JWT. <br>
        Created responsive front-end applications using Angular and React, delivering smooth user experiences. <br>
        Proficiently handled server deployment and management for various applications.
      `
    }
    // You can add more companies here if needed
  ];
}
