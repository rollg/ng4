import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {AppComponent} from './app.component';
import {CustomMaterialModule} from './app.material';
import {AppRoutingModule} from './app.routing';
import {reducer} from './state-management/reducers';
import {MainEffects} from './state-management/effects';

@NgModule({
    declarations : [ AppComponent ],
    imports : [
        BrowserAnimationsModule, BrowserModule, FormsModule, HttpModule, AppRoutingModule,

        StoreModule.provideStore(reducer),
        // we have to instrument ONLY after importing StoreModule
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
        EffectsModule.run(MainEffects)

        /*NOTE: uncomment the following to use material 2 in the project;*/
        // CustomMaterialModule
    ],
    providers : [],
    bootstrap : [ AppComponent ]
})
export class AppModule {
}
