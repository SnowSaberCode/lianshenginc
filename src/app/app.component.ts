import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { BodyContentComponent } from './components/body-content/body-content.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    RouterModule,
    HeaderBarComponent,
    BodyContentComponent,
    FooterBarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'liansheng-inc';
}
