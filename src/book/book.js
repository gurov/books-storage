import angular from 'angular';

import {bookListComponent} from './components/book-list-component';
import {bookDetailsComponent} from './components/book-details-component';
import {bookFormComponent} from './components/book-form-component';
import {IsbnService} from './../services/isbn-service';
import {BookService} from './../services/book-service';
/**
 * @namespace book */
export const book = angular.module('book', ['ui.router'])
    .service('isbnService', IsbnService)
    .service('bookService', BookService)
    .component('cBookList', bookListComponent)
    .component('cBookDetails', bookDetailsComponent)
    .component('cBookForm', bookFormComponent)
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
    });
