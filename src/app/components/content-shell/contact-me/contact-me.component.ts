import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { GetService } from '../../../services/get.service';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.less'
})
export default class ContactMeComponent {
  constructor(private service:GetService) {}
  posts: any;

  ngOnInit() {
    this.service.getPosts().subscribe(response => {
      this.posts = response;
    })
  }
}
