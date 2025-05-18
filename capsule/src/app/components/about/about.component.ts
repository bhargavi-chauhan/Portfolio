import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  // downloadResume() {
  //   const link = document.createElement('a');
  //   link.href = 'assets/Bhargavi_Chauhan_Resume.pdf';
  //   link.download = 'Bhargavi_Chauhan_Resume.pdf';
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // }  
}
