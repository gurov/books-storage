import template from './book-list.html';

class BookListController {
    constructor(isbnService) {
        this.isbnService = isbnService;
        this.bookList = [];
        this.update();
        this.order = 'title';
        this.activeBook = null;
        this.startEdit = false;
    }

    update() {
        return this.isbnService.get().then((response) => {
            this.bookList = response;
        });
    }

    setActiveBook(book) {
        console.log(book);

        //this.activeBook = book;
        this.activeBook = null;
        this.activeBook = book;
    }

    setDefaultBookList() {
        return this.isbnService.setDefault();
    }
}

export const bookListComponent = {
    template,
    controller: BookListController
};
