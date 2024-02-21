import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  name: string = 'Your Name';
  linkedInUrl: string =
    'https://www.linkedin.com/in/avinash-nagaiah-847b56260/';
  githubUrl: string = 'https://github.com/NagaiahAvinash';
  searchText: string = '';

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
