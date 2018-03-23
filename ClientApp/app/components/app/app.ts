import { Aurelia, PLATFORM} from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';
import {EventAggregator} from 'aurelia-event-aggregator';

export class App {
    router: Router;
    test: String;
    constructor(router: Router, test: String) {
              test='aditya';
              this.router = router;  
              this.test = test;
            }

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Payment';
        config.map([{
            route: [ '', 'payment' ],
            name: 'payment',
            settings: { icon: 'chevron-down' },
            moduleId: PLATFORM.moduleName('../payment/payment'),
            nav: true,
            title: 'Payment'
        },
        {
            route: 'animation-demo',
            name: 'animation-demo',
            settings: { icon: 'chevron-down' },
            moduleId: PLATFORM.moduleName('../animation_demo/animation_demo'),
            nav: true,
            title: 'Animation Demo'
        },
        {
            route: 'Home',
            name: 'Home',
            settings: { icon: 'chevron-down' },
            moduleId: PLATFORM.moduleName('../home/home'),          
            title: 'biBERK Home Page'
        },
        {
            route: 'Placeholder',
            name: 'placeholder',
            settings: { icon: 'chevron-down' },
            moduleId: PLATFORM.moduleName('../placeholder/placeholder'),
            nav: true,
            title: 'Placeholder'
        }
    ]);
    

        this.router = router;
    }    
}
