import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true, 
  imports: [FormsModule], 
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  onSubmit() {
    // For demo purposes — integrate with email API like EmailJS or backend later
    console.log('Message sent:', {
      name: this.name,
      email: this.email,
      message: this.message
    });
    alert('Your message has been sent!');
    
    // Clear form
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
