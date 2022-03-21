import { keyframes } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../data-service';
import { HeaderTitleService } from '../header-title.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  p: number = 1;
  courseHeader = 'All Courses';
  @Input() courses = [];
  cartCourses = [];
  isShown: boolean = true ;
  dataService: DataService;
  subscription: Subscription;
  activatedRoute: ActivatedRoute;
  loadedSide= 'all';
  cartValue = 0;

  constructor(dataService: DataService, activatedRoute: ActivatedRoute,
    private headerTitleService: HeaderTitleService) {
    this.dataService = dataService;
    this.activatedRoute = activatedRoute;
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.courses = this.dataService.getCourses(params.side);
        this.loadedSide = params.side;
        if(params.side === 'all')
        {
          this.headerTitleService.setTitle('Discover Latest Courses on Angular');
        }
        if(params.side === 'wishlist')
        {
          this.headerTitleService.setTitle('Wishlist');
        }
        if(params.side === 'cart')
        {
          this.headerTitleService.setTitle('Shopping Cart');
        }
      }
    );
    this.subscription = this.dataService.coursesChanged.subscribe(
      () => {
        this.courses = this.dataService.getCourses(this.loadedSide);
      }
    );
    this.subscription = this.dataService.cartCoursesChanged.subscribe(
      () => {
        this.cartCourses = this.dataService.getCourses('cart');
        this.cartValue = 0;
        for(let course of this.cartCourses){
          this.cartValue = this.cartValue + course.discounted_price;
        }
        if(this.courses === [])
        {
          this.isShown = true;
        }
        else{
          this.isShown = false;
        }
      }
    );
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onSubmit(form)
  {
    this.courses = this.dataService.searchCourse(form.value.search.toLowerCase());
  }
}
