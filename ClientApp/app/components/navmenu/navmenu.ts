import { Aurelia, PLATFORM, bindable, inject } from 'aurelia-framework';
import {App} from '../app/app'

@inject(App)
export class navmenu {
    app: App;
    constructor(app: App) {
        this.app = app;      
    }
    
}