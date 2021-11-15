import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchResults = new Subject<any>()

  constructor() { }

  search(key: Task) {
    this.searchResults.next(key)
  }

  onResults() {
    return this.searchResults.asObservable()
  }


}
