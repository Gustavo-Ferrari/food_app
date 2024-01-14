import { Component, OnInit} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api-service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatIconModule, HttpClientModule, CommonModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [ApiService]
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  submitted = false;
  hide = true;
  
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private api: ApiService,
    ) { }

  ngOnInit() {
    this.api.get('users').subscribe((data) => {
      console.log('users', data);
    });

    this.loginForm = this.formBuilder.group({
      email: ['gustavo@graodireto.com', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });

    this.loginForm.get('password')?.valueChanges.subscribe((value) => {
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
      if (!data) {
        this.loginForm.setErrors({ noMatch: true });
      } else {
        this.router.navigate(['/home']);
      }
    });
    // this.router.navigate(['/home']);
  }

}
