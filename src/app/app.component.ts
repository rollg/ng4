import {Component} from '@angular/core';

@Component({
    selector : 'app-root',
    templateUrl : './app.component.html',
    styleUrls : [ './app.component.scss' ]
})
export class AppComponent {
    public elements = [ {title : 'app works!'} ];

    addAnotherHeader() {
        this.elements.push({title : 'another title'});
    }
}
