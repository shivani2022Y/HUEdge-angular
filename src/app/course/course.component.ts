import { Component, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../data-service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() course;
  dataService: DataService;

  constructor(dataService: DataService) {
    this.dataService = dataService;
   }

  ngOnInit(): void {

  }

  courseSet()
  {
    this.dataService.saveSelectedCourse(this.course);
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
  get getImage() {
    return  this.course.value!=="wishlist"?'./assets/EmptyStar.svg' :'./assets/colouredStar.svg'
}

}
