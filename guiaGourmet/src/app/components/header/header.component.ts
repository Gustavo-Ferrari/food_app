import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  {

  constructor(private router: Router) { }

  @Input() noSearch: boolean = false;

  onImageClick() {
    this.router.navigate(['/home']);
  }
}
