var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { PLATFORM } from "aurelia-pal";
import { Router } from 'aurelia-router';
import { inject } from 'aurelia-dependency-injection';
let App = class App {
    constructor(Router) {
        this.router = Router;
    }
    configureRouter(config, router) {
        this.router = router;
        config.options.pushState = true;
        config.options.root = '/';
        config.mapUnknownRoutes(PLATFORM.moduleName('pages/modules/home/home'));
        config.map([
            {
                route: ['', 'home'],
                name: 'home',
                moduleId: PLATFORM.moduleName('pages/modules/home/home'),
                title: 'Home',
                active: 'home'
            },
            {
                route: 'about-us',
                name: 'about-us',
                moduleId: PLATFORM.moduleName('pages/modules/about-us/about-us'),
                title: 'About Us',
                active: 'about-us'
            },
            {
                route: 'contact-us',
                name: 'contact-us',
                moduleId: PLATFORM.moduleName('pages/modules/contact-us/contact-us'),
                title: 'Contact us',
                active: 'contact-us'
            },
            {
                route: 'customer',
                name: 'customer',
                moduleId: PLATFORM.moduleName('pages/modules/customer/customer'),
                title: 'Customer',
                active: 'customer'
            },
            {
                route: 'newLogin',
                name: 'newLogin',
                moduleId: PLATFORM.moduleName('pages/modules/auth/login/newLogin'),
                title: 'Login',
                active: 'newLogin'
            },
            {
                route: 'newRegister',
                name: 'newRegister',
                moduleId: PLATFORM.moduleName('pages/modules/auth/register/newRegister'),
                title: 'Sign Up',
                active: 'newRegister'
            }
        ]);
    }
};
App = __decorate([
    inject(Router),
    __metadata("design:paramtypes", [Object])
], App);
export { App };
//# sourceMappingURL=app.ts.map
