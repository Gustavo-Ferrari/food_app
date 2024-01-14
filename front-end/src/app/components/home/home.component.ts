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
    private apiService: ApiService
  ) { }

  async ngOnInit() {
    await this.apiService.get('restaurants/11/products/').subscribe((data) => {
      console.log(data);
    });
  }

}