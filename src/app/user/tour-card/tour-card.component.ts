import { Component, Input, input, signal } from '@angular/core';


type TourObjectType={title:string, 
  id:number,
  description:string,
  start_date:string,
  finish_date:string,
  image:string,}

@Component({
  selector: 'app-tour-card',
  standalone: true,
  imports: [],
  templateUrl: './tour-card.component.html',
  styleUrl: './tour-card.component.css'
})

export class TourCardComponent {
  @Input() tourData!:TourObjectType
}
