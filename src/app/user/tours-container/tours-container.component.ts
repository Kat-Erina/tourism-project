import { Component } from '@angular/core';
import { tours } from '../../dummytoursdata';
import { TourCardComponent } from '../tour-card/tour-card.component';

@Component({
  selector: 'app-tours-container',
  standalone: true,
  imports: [TourCardComponent],
  templateUrl: './tours-container.component.html',
  styleUrl: './tours-container.component.css'
})
export class ToursContainerComponent {
toursData=tours
}
