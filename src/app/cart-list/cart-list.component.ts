import { Component, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data-service';
import { HeaderTitleService } from '../header-title.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  p: number = 1;
  courseHeader = 'My Shopping Cart';
  cartCourses = [];
  dataService : DataService;
  subscription: Subscription;

  constructor(dataService: DataService, private headerTitleService: HeaderTitleService) {
    this.dataService = dataService;
   }

  ngOnInit(): void {
    this.headerTitleService.setTitle('Shopping Cart');

    this.subscription = this.dataService.cartCoursesChanged.subscribe(
      () => {
        this.cartCourses = this.dataService.getCourses('all');
        console.log(this.cartCourses);
      }
    );
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
