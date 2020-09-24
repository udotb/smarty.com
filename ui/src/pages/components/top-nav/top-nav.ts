import {Router} from 'aurelia-router';
import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator'

@inject(Router, EventAggregator)

export class TopNav {

  public router;
  public activeRoute;
  public eventAggregator;

  constructor(router, eventAggregator) {
    this.router = router;
    this.eventAggregator= eventAggregator;
  }

  attached() {
    this.getActiveRoute();
    const route = this.eventAggregator.subscribe('router:navigation:success', this.getActiveRoute.bind(this));
  }

  getActiveRoute() {
    this.activeRoute= this.router.currentInstruction.config.active;
  }
}
