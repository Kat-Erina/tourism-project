import { Component, inject, OnInit } from '@angular/core';
import { UserHeaderComponent } from './user-header/user-header.component';
import { ToursContainerComponent } from './tours-container/tours-container.component';
import { HttpClient } from '@angular/common/http';
// import { tours } from '../dummytoursdata';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [UserHeaderComponent, ToursContainerComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent  {
  // request=inject(HttpClient)

  // ngOnInit(): void {
  //   this.request.get("https://localhost:7102/api/File/GetFileDataList").subscribe(reponse=>console.log(reponse))
  // }

}
