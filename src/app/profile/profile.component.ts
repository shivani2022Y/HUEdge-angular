import { Component, OnInit, Output } from '@angular/core';
import { DataService } from '../data-service';
import { HeaderTitleService } from '../header-title.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userData = [{"displayName": "", "firstName": "", "lastName": "", "aboutYourself": "", "isDesigner": false
, "isDeveloper": false, "isProjectManager": false, "isSales": false, "isStudent": false, "isProfessional": false,
"isFive": false, "isTen": false, "isTenPlus": false, "isJava": false, "isReact": false, "isBackend": false,
"role": ""}]
  isVisible: boolean = false;
  dataService : DataService;
  constructor(dataService: DataService, private headerTitleService: HeaderTitleService) {
    this.dataService = dataService;
   }

  ngOnInit(): void {
    this.headerTitleService.setTitle('My Profile');
    // this.userData = JSON.parse(window.localStorage.getItem('user'));
  }

  onSubmit(submittedForm)
  {
    console.log(this.userData[0]);
    this.userData = submittedForm.value;
    this.dataService.openDialog("Success", "Form saved Succesfuly");
    window.localStorage.setItem('user', JSON.stringify(this.userData));
  }
  changeVisible(value)
  {
    if(value === "yes")
      this.isVisible = true;
    else
      this.isVisible = false;
  }

}
