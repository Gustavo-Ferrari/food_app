import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {
  private selectionSource = new BehaviorSubject<string>('');
  private inputSource = new BehaviorSubject<string>('');
  currentSelection = this.selectionSource.asObservable();
  currentInput = this.inputSource.asObservable();

  changeSelection(selection: string) {
    this.selectionSource.next(selection);
  }

  changeInput(input: string) {
    this.inputSource.next(input);
  }

}