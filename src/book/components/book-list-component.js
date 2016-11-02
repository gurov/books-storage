import template from './book-list.html';
import {defaultBookList} from '../../data/default-book-list';

class BookListController {
    constructor(isbnService) {
        this.isbnService = isbnService;
        this.bookList = [];
        this.update();
    }

    update() {
        return this.isbnService.get().then((response) => {
            this.bookList = response;
            console.log(response);
            console.log(defaultBookList);
            if (!response) {
                this.bookList = defaultBookList;
            }
        });
    }
}

export const bookListComponent = {
    template,
    controller: BookListController
};
