import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {CustomMaterialModule} from './app.material';
import {AppRoutingModule} from './app.routing';

@NgModule({
    declarations : [ AppComponent ],
    imports : [
        BrowserAnimationsModule, BrowserModule, FormsModule, HttpModule, AppRoutingModule,

        /*NOTE: uncomment the following to use material 2 in the project;*/
        // CustomMaterialModule
    ],
    providers : [],
    bootstrap : [ AppComponent ]
})
export class AppModule {
}
