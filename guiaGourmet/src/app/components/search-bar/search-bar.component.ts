import { Component } from '@angular/core';
import { SelectionService } from '../../services/selection-service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  constructor(
    private selectionService: SelectionService
  ) { }

  selectedValue: string = '';
  searchValue: string = '';
  
  onSelection(event: any) {
    this.selectionService.changeSelection(event.value);
  }

  onInputChange(event: any) {
    this.selectionService.changeInput(event.target.value);
  }

  clearSearch() {
    this.selectionService.changeInput('');
    this.selectionService.changeSelection('');
    this.searchValue = '';
    this.selectedValue = '';
    
  }

}
