import angular from 'angular';

import {playerBoxComponent} from './components/player-box-component';
import {courtComponent} from './components/court-component';
import {GameService} from './../services/game-service';
/**
 * @namespace game
 */
export const game = angular.module('game', ['ui.router'])
    .service('gameService', GameService)
    .component('cCourt', courtComponent)
    .component('cPlayerBox', playerBoxComponent)
    .config(function ($stateProvider) {
        $stateProvider
            .state('game', {
                url: '/game',
                template: '<c-court></c-court>'
            });

    });
