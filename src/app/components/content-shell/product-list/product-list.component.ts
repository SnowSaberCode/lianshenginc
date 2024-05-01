import { Component, OnInit  } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { GalleryModule, GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,MatGridListModule, GalleryModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.less'
})
export default class ProductListComponent implements OnInit {

  images: GalleryItem[] = [];


  ngOnInit() {
    // Set items array
    this.images = [
      new ImageItem({ src: '..\\..\\assets\\3.jpg', thumb: 'IMAGE_THUMBNAIL_URL' }),
      new ImageItem({ src: '..\\..\\assets\\4.jpg', thumb: 'IMAGE_THUMBNAIL_URL' }),
      new ImageItem({ src: '..\\..\\assets\\5.jpg', thumb: 'IMAGE_THUMBNAIL_URL' }),
      new ImageItem({ src: '..\\..\\assets\\6.jpg', thumb: 'IMAGE_THUMBNAIL_URL' }),
      new ImageItem({ src: '..\\..\\assets\\7.jpg', thumb: 'IMAGE_THUMBNAIL_URL' }),
      // ... more items
    ];
  }

}
