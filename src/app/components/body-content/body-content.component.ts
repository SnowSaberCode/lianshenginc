import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-body-content',
  standalone: true,
  imports: [RouterOutlet
  ],
  templateUrl: './body-content.component.html',
  styleUrl: './body-content.component.less'
})
export class BodyContentComponent {

}
