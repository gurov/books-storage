import angular from 'angular';

import {bookListComponent} from './components/book-list-component';
import {bookDetailsComponent} from './components/book-details-component';
import {IsbnService} from './../services/isbn-service';
/**
 * @namespace book */
export const book = angular.module('book', ['ui.router'])
    .service('isbnService', IsbnService)
    .component('cBookList', bookListComponent)
    .component('cBookDetails', bookDetailsComponent)
    .config(function ($stateProvider) {
        $stateProvider
            .state('book', {
                url: '/book',
                abstract: true,
                template: '<ui-view/>'
            })
            .state('book.list', {
                url: '/list',
                template: '<c-book-list></c-book-list>'
            }).state('book.details', {
                url: '/details/:isbn',
                template: '<c-book-details></c-book-details>'
            });
    });
