import { Component,  OnInit} from '@angular/core';
import { ApiService } from '../../services/api-service';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from '../header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, HeaderComponent, MatToolbarModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [ApiService]
})
export class HomeComponent implements OnInit {
  constructor(
    private api: ApiService
  ) { }

  userName: string;

  ngOnInit() {
    let fullName;
    if (typeof window !== 'undefined') {
      fullName = JSON.parse(localStorage.getItem('user') || '{}');
      this.userName = fullName.split(' ')[0];
    }

    this.api.get('restaurants/').subscribe((data) => {
      console.log(data);
    });
  }

}
