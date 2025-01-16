import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  name = "Mohammad Sameer Uddin";

  openResume(event: MouseEvent) {
    event.stopPropagation();  // Prevents the default action
    window.open('https://drive.google.com/file/d/12l9BFBlH_1QEsCqUreDjz5Q4xaXru55j/view?usp=drive_link', '_blank');
    
  }
}