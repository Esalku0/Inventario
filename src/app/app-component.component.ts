import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './app/app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `          
            <section class="content">
                 <router-outlet></router-outlet> 
            </section>         
            `,
  styleUrls: ['./app.component.css'], // Con la "s"
  imports: [RouterOutlet],
})
export class AppComponent {}
