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
    window.open('https://drive.google.com/file/d/1BxXiTx-o4tyaBYChBOxJbM2kfpztuoA7/view?usp=drive_link', '_blank');
    
  }
}