import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() course;
  dataService: DataService;

  constructor(dataService: DataService) {
    this.dataService = dataService;
   }

  ngOnInit() {
    this.course = this.dataService.getSelectedCourse();
  }
  onAssign(value)
  {
    if(value === 'wishlist')
    {
      this.dataService.onAddingToWishList({title: this.course.title, place: value});
    }
    else{
      this.dataService.onAddingToCart({title: this.course.title, place: value});
    }

  }
}
