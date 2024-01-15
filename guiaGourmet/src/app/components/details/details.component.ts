import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api-service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  providers: [ApiService]
})
export class DetailsComponent implements OnInit {

  constructor (
    private route: ActivatedRoute,
    private api: ApiService
  ) { }

  restaurantInfo: any = {};
  displayList: any = [];

  ngOnInit() {
    this.route.url.subscribe(url => {
      if (url[0].path === 'restaurants') {
        this.getRestaurantInfo(url[1].path);
      } else if (url[0].path === 'products') {
        console.log('This is a products page');
      }
    });
  }

  getRestaurantInfo(id:string) {
    this.api.get(`restaurants/${id}`).subscribe(data => {
      this.restaurantInfo = data;
      this.getRestaurantMenu(id);
    });
  }
  getRestaurantMenu(id:string) {
    this.api.get(`restaurants/${id}/products`).subscribe(data => {
      this.displayList = data;
      console.log('restaurante', [this.restaurantInfo]);
      console.log('menu', this.displayList);
    });
  }

}
