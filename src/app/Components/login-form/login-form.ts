import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  imports: [
    FormsModule
  ],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css'
})
export class LoginForm {
  email: string = '';
  password: string = '';

  onSubmit() {
    alert("Login form submitted")
  }
}
