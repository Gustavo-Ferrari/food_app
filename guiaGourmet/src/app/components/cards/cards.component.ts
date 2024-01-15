import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  private _displayList: any = [];

  @Input() set displayList(list: any) {
    this._displayList = list;
    console.log(this._displayList)
  }
  
  constructor() { }
  
  ngOnInit() {
  }
  onCardClick(item: any) {
    console.log(item);
    // Aqui você pode adicionar a lógica para lidar com o clique no card
  }

  get displayList() {
    return this._displayList;
  }
};

