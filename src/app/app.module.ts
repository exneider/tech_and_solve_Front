import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './viaje/app.component';
import { ViajeService } from './viaje/viaje.service';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UploadfileComponent } from './uploadfile/uploadfile.component';
import { AlertService } from './alert/alert.service';
import { AlertComponent } from './alert/alert.component';
import { Routes, RouterModule } from '@angular/router';
import { routes } from './routes';
@NgModule({
  declarations: [
    AppComponent,
    UploadfileComponent,
    AlertComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    HttpModule,
    NgHttpLoaderModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { useHash: true })
 
  ],
  providers: [ViajeService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
