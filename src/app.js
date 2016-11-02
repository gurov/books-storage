import 'jquery';

import './../node_modules/bootstrap/dist/css/bootstrap.css';
import './app.css';

import angular from 'angular';
import 'angular-ui-router';
import 'angular-localforage';
import 'angular-strap';
import 'angular-strap/dist/angular-strap.tpl';
import 'isbn';

import 'lodash';

import {player} from './player/player';
import {game} from './game/game';

angular.module('app', [
    'ui.router',
    'ISBN',
    'LocalForageModule',
    'mgcrea.ngStrap',
    player.name,
    game.name
]);
