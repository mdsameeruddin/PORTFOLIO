import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faReact, faHtml5, faCss3Alt, faBootstrap, faJava, faGithub, faDocker, faAws, faAngular, faTrello } from '@fortawesome/free-brands-svg-icons';
import { faCog, faCogs, faCubes, faFileCode, faLeaf, faMicrochip, faShieldAlt, faStream } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  constructor(private library: FaIconLibrary) {
    // Register the icons into the library
    library.addIcons(faReact, faHtml5, faCss3Alt, faBootstrap, faJava, faGithub, faDocker, faAws, faMicrochip);
  }

  // Store actual icon objects instead of strings
  skilldetails = [
    { title: 'React', icon: faReact, color: '#00dcff' },
  { title: 'Angular', icon: faAngular, color: '#dd0031' },
    { title: 'HTML', icon: faHtml5, color: '#e44d26' },
    { title: 'CSS', icon: faCss3Alt, color: '#264de4' },
    { title: 'JavaScript', icon: faCss3Alt, color: '#f0db4f' },
    { title: 'TypeScript', icon: faFileCode, color: '#007acc' },
    { title: 'Java', icon: faJava, color: 'red' },
    { title: 'Microservices', icon: faCogs, color: '#241b54' }, // Using faCogs for Microservices
  { title: 'Spring Boot', icon: faLeaf, color: '#6cb33e' },   // Using faLeaf for Spring Boot
  { title: 'Kafka', icon: faStream, color: '#2f2f2f' },       // Using faStream for Kafka
  { title: 'Spring Security', icon: faShieldAlt, color: '#036a9e' }, 
    
    
  ];
  othersSkills = [
    { title: 'Docker', icon: faDocker, color: '#2496ed' },
    { title: 'GitHub', icon: faGithub, color: 'black' },
    { title: 'AWS', icon: faAws, color: '#ff9900' },
    { title: 'Kubernetes', icon: faCubes, color: '#326ce5' }, // Using faCubes for Kubernetes
  { title: 'Trello', icon: faTrello, color: '#0079bf' },  
  ];
}
