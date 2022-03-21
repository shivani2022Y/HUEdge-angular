import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { MatDialog } from "@angular/material/dialog";
import { Subject } from "rxjs";
import { map } from 'rxjs/operators';
import { DialogComponent } from "./dialog/dialog.component";

@Injectable()
export class DataService{

  courses = [];
  cartCourses = [];
  selectedCourse;
  coursesChanged = new Subject<void>();
  cartCoursesChanged = new Subject<void>();
  dialog: MatDialog;
  http: Http;

    constructor(http: Http, dialog: MatDialog)
    {
      this.http = http;
      this.dialog = dialog;
    }

    saveSelectedCourse(selectedCourse){
        this.selectedCourse = selectedCourse;
    }
    getSelectedCourse()
    {
      return this.selectedCourse;
    }

    openDialog(header, message) {
      this.dialog.open(DialogComponent, {data: {
        message : message,
        header: header
      }})
    }

    searchCourse(keyword){
      return this.courses.filter((tempCourse) =>{
        return tempCourse.title.toLowerCase().includes(keyword)
        || tempCourse.author.toLowerCase().includes(keyword);
      })
    }

    getCourses(chosenList) {
      if (chosenList === 'all') {
        return this.courses.slice();
      }
      return this.courses.filter((tempCourse) => {
        return tempCourse.value === chosenList;
      })
    }


  fetchCourses()
  {
    this.courses = JSON.parse(window.localStorage.getItem('courses'));
    if(this.courses === null)
    {
      this.http.get('https://614c71e059e92d00176ad244.mockapi.io/course/courseDetails')
        .pipe(map((response) => {
      return response.json()
      }))
      .subscribe(
        (data) => {
        this.courses = data;
        this.coursesChanged.next();
        window.localStorage.setItem('courses', JSON.stringify(this.courses));
        }
      );

    }
  }

  onAddingToWishList(courseInfo)
  {
      const pos = this.courses.findIndex((tempCourse) =>{
        return tempCourse.title === courseInfo.title && tempCourse.value === 'wishlist';
      })
      if(pos !== -1)
      {
        this.courses[pos].value = 'all';
        this.coursesChanged.next();
        return ;
      }
        const pos2 = this.courses.findIndex((tempCourse) => {
          return tempCourse.title === courseInfo.title;
      });
      if(pos2 !== -1)
      {
        this.courses[pos2].value = 'wishlist';
        this.coursesChanged.next();
        this.cartCoursesChanged.next();
      }
  }
  onAddingToCart(courseInfo)
  {
    const pos = this.courses.findIndex((tempCourse) =>{
      return tempCourse.title === courseInfo.title && tempCourse.value === 'cart';
    })
    if(pos !== -1)
    {
      this.openDialog("Already Exist in cart", "Course "+ this.courses[pos].title+ " is already present in your Cart");
      return ;
    }
      const pos2 = this.courses.findIndex((tempCourse) => {
        return tempCourse.title === courseInfo.title;
    });
    if(pos2 !== -1)
    {
      this.courses[pos2].value = 'cart';
      this.cartCourses.push(this.courses[pos2]);
      this.openDialog("Success!!", "Course "+ this.courses[pos2].title+ " added in your Cart");
      this.coursesChanged.next();
      this.cartCoursesChanged.next();
    }
  }
}
