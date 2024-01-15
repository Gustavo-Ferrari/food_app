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
  user: string = '';

  searchValue: string = '';

  ngOnInit() {
    this.setFistRenderList();
    
    this.getAndSetLists();
    combineLatest([
      this.selectionService.currentSelection,
      this.selectionService.currentInput
    ]).subscribe(([selection, input]) => {
      switch (selection) {
        case 'restaurante':
          this.displayList = this.restaurant_list;
          break;
        case 'descrição':
        case 'item':
          this.displayList = this.product_list;
          break;
      }
      this.setFilteredList(this.displayList, input, selection)
    })
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('user') ?? '';
      this.user = user.split(' ')[0].replace('"', '');
    }

    this.displayList = this.restaurant_list;
  }

  setFistRenderList() {
    this.api.get('restaurants').subscribe(data => {
      this.displayList = data;
    });
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

  setFilteredList(displayList: Array<any>, searchValue: string, selection: string ) {
    switch (selection) {
      case '':
        this.displayList = displayList;
        break;
      case 'item':
      case 'restaurante':
        this.displayList = displayList.filter((rest: any) => {
          return rest.name.toLowerCase().includes(searchValue.toLowerCase());
        });
        break;
      case 'descrição':
        this.displayList = displayList.filter((item: any) => {
          return item.description.toLowerCase().includes(searchValue.toLowerCase());
        });
        break;
    }
  }


}
