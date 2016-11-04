import 'jquery';

import './../node_modules/bootstrap/dist/css/bootstrap.css';
import './../node_modules/angularjs-datepicker/dist/angular-datepicker.min.css';
import './app.css';

import angular from 'angular';
import 'angular-ui-router';
import 'angular-localforage';
import 'angular-strap';
import 'angularjs-datepicker';
import 'angular-strap/dist/angular-strap.tpl';
import 'angular-img-cropper';
import 'isbn';
import 'lodash';

import {book} from './book/book';

angular.module('app', [
    'ui.router',
    'LocalForageModule',
    'mgcrea.ngStrap',
    'angular-img-cropper',
    '720kb.datepicker',
    book.name
]);
