import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-bar',
  standalone: true,
  imports: [MatIconModule, 
    MatDividerModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './header-bar.component.html',
  styleUrl: './header-bar.component.less'
})
export class HeaderBarComponent {

}
