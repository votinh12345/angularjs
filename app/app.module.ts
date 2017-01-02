import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routes';

import { LoginComponent } from './login/login.component';
import { PlanComponent } from './plan/plan.component';
import { PagerService } from './_services/index';

@NgModule({
    imports: [
        BrowserModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        PlanComponent
    ],
    providers: [
        PagerService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
