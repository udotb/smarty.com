import {PLATFORM} from "aurelia-pal";
import {Router, RouterConfiguration} from 'aurelia-router';
import {inject} from 'aurelia-dependency-injection';

@inject(Router)

export class App {
  public router;

  constructor(Router) {
    this.router=Router

  }


  configureRouter(config: RouterConfiguration, router: Router): void {
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

    ])
  }}
