import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { GetService } from '../../../services/get.service';


@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.less'
})
export default class AboutMeComponent {
  lianshengName = '襄阳联胜电气有限公司';
  phoneLbl = '联系电话：';
  posts: any;

  constructor(private service:GetService) {}

  ngOnInit() {
    this.service.getPosts().subscribe(response => {
      this.posts = response;
    })
  }

}
