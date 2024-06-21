import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { withInterceptorsFromDi, provideHttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import { tokenInterceptor } from './auth/interceptor/token.interceptor';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { SharedModule } from './shared.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    {provide: HTTP_INTERCEPTORS, useClass: tokenInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
