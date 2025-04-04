import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app-component.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AuthGuard } from './app/auth.guard';
import { DatePipe } from '@angular/common';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    AuthGuard,// Aquí lo agregamos para habilitar HttpClient
    DatePipe 
  ],
}).catch((err) => console.error(err));
