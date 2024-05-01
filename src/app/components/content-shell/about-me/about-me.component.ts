import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.less'
})
export default class AboutMeComponent {

}
