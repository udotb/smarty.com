import {Customer} from './customer';

export class App {
  public customers;
  public customerName;
  public customerEmail;
  public customerPhone;

  constructor() {
    this.customers = this.getCustomersFromStorage();

    this.customerName = '';
    this.customerEmail = '';
    this.customerPhone = '';
  }

  configureRouter(config, router) {
    // this.router = router;
    config.title = 'Route Test';
    config.map([
      {
        route: '', name: 'home', moduleId: 'ind' +
          'ex'
      },
      {route: 'about', name: 'about', moduleId: 'about', navigation: true}
    ]);
  }


  getCustomersFromStorage() {
    let customers;
    if (localStorage.getItem('customers') === null) {
      customers = [];
    } else {
      customers = JSON.parse(localStorage.getItem('customers'));
    }

    return customers;
  }

  addCustomer() {
    if (this.customerName && this.customerEmail && this.customerPhone) {
      this.customers.push(new Customer(this.customerName, this.customerEmail, this.customerPhone));

      // Store in LS
      this.storeCustomer(this.customerName, this.customerEmail, this.customerPhone);

      // Clear Fields
      this.customerName = '';
      this.customerEmail = '';
      this.customerPhone = '';
    }
  }

  storeCustomer(name, email, phone) {
    let customers;
    if (localStorage.getItem('customers') === null) {
      customers = [];
    } else {
      customers = JSON.parse(localStorage.getItem('customers'));
    }

    customers.push({name: name, email: email, phone: phone});
    localStorage.setItem('customers', JSON.stringify(customers));
  }

  removeCustomer(customer) {
    let index = this.customers.indexOf(customer);
    if (index !== -1) {
      this.customers.splice(index, 1);
    }
    this.removeCustomerFromStorage(index);
  }

  removeCustomerFromStorage(index) {
    let customers = JSON.parse(localStorage.getItem('customers'));

    customers.splice(index, 1);

    localStorage.setItem('customers', JSON.stringify(customers));
  }
}
