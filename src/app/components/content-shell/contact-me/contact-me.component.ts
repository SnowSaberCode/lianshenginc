import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.less'
})
export default class ContactMeComponent {

}
