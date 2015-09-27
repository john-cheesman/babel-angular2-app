import 'zone.js/lib/browser/zone-microtask';
import 'reflect-metadata';
import 'babel-core/polyfill';
import { assert } from 'rtts_assert/rtts_assert';
import { Component, View, bootstrap } from 'angular2/angular2';

@Component({
  selector: 'app',
})
@View({
  templateUrl: 'templates/app.html'
})
class App {}

bootstrap(App);
