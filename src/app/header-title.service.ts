import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderTitleService {
  title = new BehaviorSubject('Discover Latest Courses on Angular');

  setTitle(title: string) {
    this.title.next(title);

  }
  constructor() { }
}
