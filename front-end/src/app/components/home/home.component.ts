import { Component,  OnInit} from '@angular/core';
import { ApiService } from '../../services/api-service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule],
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
    const fullName = JSON.parse(localStorage.getItem('user') || '{}');
    this.userName = fullName.split(' ')[0];

    this.api.get('restaurants/').subscribe((data) => {
      console.log(data);
    });
  }

}
