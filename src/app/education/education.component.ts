import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  details = this.collegeDetails()[0];

  collegeDetails() {
    return [
      {
        collegeLogo: "/assets/resume/IMG_20240709_225843.jpg",
        collegeName: "GURU NANAK DEV ENGINEERINFG COLLEGE",
        collegeDegreeTitle: "Bachelor of Engineering"
      }
    ];
  }
}
