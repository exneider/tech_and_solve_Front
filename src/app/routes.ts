import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './viaje/app.component';


export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: '**', redirectTo: '' }
];

