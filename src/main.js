import 'zone.js';
import 'reflect-metadata';
import 'es6-shim';

import {
  Component,
  View,
  bootstrap
  } from 'angular2/angular2';

//create a simple angular component
@Component({
  selector: 'test-app'
})
@View({
  template: '<h4>Hello {{name}}</h4>'
})
class TestApp {
  name: string;
  constructor(){
    this.name = 'Angular2';
    setTimeout(() => {
      this.name = 'Angular2!!!'
    },1500);
  }
}

//start our app
bootstrap(TestApp);