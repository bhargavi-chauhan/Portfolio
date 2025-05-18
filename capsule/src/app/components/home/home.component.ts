import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // Action for Get in Touch button (you can customize the action)
  getInTouch() {
    // This could open an email or a contact form (e.g., using mailto: or navigating to a contact page)
    window.location.href = 'mailto:bhargavi.c2004@gmail.com'; // Replace with your email
  }

  // Action for CV button (this would trigger a download, or you can link it to your CV file)
  downloadResume() {
    // Replace with your CV file path
    const fileUrl = '/assets/Bhargavi_Chauhan_Resume.pdf'; 
    window.open(fileUrl, '_blank');
  }

}
