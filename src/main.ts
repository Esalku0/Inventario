import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app-component.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AuthGuard } from './app/auth.guard';
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

bootstrapApplication(AppComponent, {
  providers: [
    BrowserAnimationsModule,
    provideRouter(routes),
    provideHttpClient(),
    AuthGuard,
    DatePipe,
    provideAnimations(), // Necesario para Toastr
    provideToastr({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }) // Configuración correcta de Toastr
  ],
}).catch((err) => console.error(err));
