import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path : '', redirectTo : '/home', pathMatch : 'full'},
    {path : 'about', loadChildren : './components/about/about.module#AboutModule'},
    {path : 'home', loadChildren : './components/home/home.module#HomeModule'}
];

@NgModule({
    imports : [ RouterModule.forRoot(routes) ],
    exports : [ RouterModule ],
})
export class AppRoutingModule {
}
