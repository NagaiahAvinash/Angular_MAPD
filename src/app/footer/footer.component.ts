import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  name: string = 'Avinash Nagaiah';
  college: string = 'Cambrian College';
  id: string = 'A00227141';
  currentYear: number = new Date().getFullYear();
  collegeUrl: string = 'https://cambriancollege.ca/';

  navigateToCollege() {
    window.open(this.collegeUrl, '_blank');
  }
}
``;
