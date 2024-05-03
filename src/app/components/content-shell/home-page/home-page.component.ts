import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.less'
})
export default class HomePageComponent implements AfterViewInit {
  ngAfterViewInit(): void {
      var height = this.homePageImg.nativeElement.offsetHeight;
      this.wordContent.nativeElement.style.top = height / 2 + 'px';
  }

  @ViewChild('homePageImg')
  homePageImg!: ElementRef;
  @ViewChild('wordContent')
  wordContent!: ElementRef;
}
