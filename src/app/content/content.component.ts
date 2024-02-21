import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  @Input() data: string | undefined;
  email: string = '';
  showContactForm: boolean = false;
  showContactRefusal: boolean = false;

  toggleContact(answer: string) {
    this.showContactForm = answer === 'yes';
    this.showContactRefusal = answer === 'no';
  }

  sendEmail() {
    console.log('Email to send:', this.email);
    // Here you would typically handle the email sending logic
  }
}
