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

  productInfo: any = [];
  restaurantInfo: any = [];
  displayList: any = [];

  ngOnInit() {
    this.route.url.subscribe(url => {
      if (url[0].path === 'restaurants') {
        this.getRestaurantInfo(url[1].path);
      } else if (url[0].path === 'products') {
        this.getProductInfo(url[1].path);
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
      this.productInfo = null;
    });
  }

  getProductInfo(id:string) {
    this.api.get(`products/${id}`).subscribe(data => {
      this.productInfo = data;
      this.getProductRestaurantList(id);
    });
  }

  getProductRestaurantList(id:string) {
    this.api.get(`products/${id}/restaurants`).subscribe(data => {
      this.displayList = data;
      this.restaurantInfo = null;
    });
  }


}
