import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  urlPrefix = '../../../assets/images/';
  private _displayList: any = [];

  @Input() set displayList(list: any) {
    this._displayList = list;
  }
  
  constructor(
    private router: Router
  ) { }
  

  onCardClick(item: any) {
    if (item.phone) {
      this.router.navigate([`/restaurants/${item.id}`]); 
    } else {
      this.router.navigate([`/products/${item.id}`]);
    }
  }

  get displayList() {
    return this._displayList;
  }
};

