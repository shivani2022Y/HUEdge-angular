import { Component, Input, OnInit } from '@angular/core';
import { HeaderTitleService } from '../header-title.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerMessage = '';

constructor(private headerTitleService: HeaderTitleService) {}

ngOnInit() {
  this.headerTitleService.title.subscribe(updatedTitle => {
    this.headerMessage = updatedTitle;
  });
}

}
