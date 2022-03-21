import { Component, Input, Output } from '@angular/core';
import { DataService } from './data-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HashedInLearning';
  dataService: DataService;
  @Input() headerMessage;
  @Output() headerMessage1;

  constructor(dataService: DataService)
  {
    this.dataService = dataService;
  }

  ngOnInit(){
     this.dataService.fetchCourses();
  }
}
