import { Component, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'angular-portfolio';
  
  isPageLoaded = false;

  ngOnInit(): void {
    // Simulate loading delay or use real logic (like waiting for data)
    setTimeout(() => {
      this.isPageLoaded = true;
    }, 1500); // Adjust duration as needed
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
