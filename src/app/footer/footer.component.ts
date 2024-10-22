import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  socialLinks = [
    { href: 'https://www.linkedin.com/in/a-rahman-hussain/', icon: 'linkedin', target: '_blank' },
    { href: 'https://github.com/ar3hma786', icon: 'github', target: '_blank' },
    { href: 'https://www.instagram.com/a_rahman_hussain/', icon: 'instagram', target: '_blank' },
    { href: 'mailto:arahmanhussain786@gmail.com', icon: 'envelope', target: '_blank' }
  ];
}
