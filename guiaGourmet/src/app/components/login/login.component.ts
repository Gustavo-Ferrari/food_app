import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [ApiService]
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  hide = true;
  
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private api: ApiService,
    ) { 
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
    }

  ngOnInit() {
    this.loginForm.get('password')?.valueChanges.subscribe(() => {
      this.submitted = false;
      });
    }

  submit() {
    const email = this.loginForm.get('email')?.value.trim();  
    const password = this.loginForm.get('password')?.value.trim();
    const payload = {
      email,
      password,
    };
    this.api.post('users', payload).subscribe((data) => {
      this.submitted = true;
      localStorage.setItem('user', JSON.stringify(data));
      if (!data) {
        this.loginForm.setErrors({ noMatch: true });
      } else {
        this.router.navigate(['/home']);
      }
    });
    // this.router.navigate(['/home']);
  }

}

