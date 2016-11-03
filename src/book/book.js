import angular from 'angular';

import {bookListComponent} from './components/book-list-component';
import {bookDetailsComponent} from './components/book-details-component';
import {bookEditComponent} from './components/book-edit-component';
import {bookAddComponent} from './components/book-add-component';
import {bookFormComponent} from './components/book-form-component';
import {IsbnService} from './../services/isbn-service';
/**
 * @namespace book */
export const book = angular.module('book', ['ui.router'])
    .service('isbnService', IsbnService)
    .component('cBookList', bookListComponent)
    .component('cBookDetails', bookDetailsComponent)
    .component('cBookEdit', bookEditComponent)
    .component('cBookAdd', bookAddComponent)
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
            }).state('book.details', {
                url: '/details/:isbn',
                template: '<c-book-details></c-book-details>'
            }).state('book.edit', {
                url: '/edit/:isbn',
                template: '<c-book-edit></c-book-edit>'
            }).state('book.add', {
                url: '/add',
                template: '<c-book-add></c-book-add>'
            });
    });
