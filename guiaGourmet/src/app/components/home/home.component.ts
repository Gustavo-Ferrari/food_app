import { Component } from '@angular/core';
import { ApiService } from '../../services/api-service';
import { combineLatest, forkJoin } from 'rxjs';
import { SelectionService } from '../../services/selection-service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [ApiService]
})
export class HomeComponent {
  constructor(
    private api: ApiService,
    private selectionService: SelectionService
    ) { }

  restaurant_list: any = [];
  product_list: any = [];
  displayList: any = [];

  searchValue: string = '';

  ngOnInit() {
    this.getAndSetLists();
    combineLatest([
      this.selectionService.currentSelection,
      this.selectionService.currentInput
    ]).subscribe(([selection, input]) => {
      switch (selection) {
        case '':
          this.displayList = this.restaurant_list;
          break;
        case 'restaurants':
          this.displayList = this.restaurant_list;
          break;
        case 'item':
          this.displayList = this.product_list;
          break;
      }
      this.searchValue = input;
      this.setFilteredList(this.displayList, this.searchValue)
    })
  }

  getAndSetLists() {
    forkJoin({
      restaurants: this.api.get('restaurants'),
      products: this.api.get('products')
    }).subscribe(({restaurants, products}) => {
      this.restaurant_list = restaurants;
      this.product_list = products;
    });
  }

  setFilteredList(displayList: Array<any>, searchValue: string) {
    console.log('displayList', displayList);
    console.log('searchValue', searchValue);

    
  }


}
