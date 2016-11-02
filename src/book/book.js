import angular from 'angular';

import {bookListComponent} from './components/book-list-component';
import {IsbnService} from './../services/isbn-service';
/**
 * @namespace book */
export const book = angular.module('book', ['ui.router'])
    .service('isbnService', IsbnService)
    .component('cBookList', bookListComponent)
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
            });
            //  .state('book.add', {
            //      url: '/add',
            //      template: '<c-book-add></c-book-add>'
            //  });
    });
