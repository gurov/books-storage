import template from './book-list.html';

class BookListController {
    constructor(isbnService) {
        this.isbnService = isbnService;
        this.bookList = [];
        this.update();
        this.filter = 'title'
        this.activeBook = null;
    }

    update() {
        return this.isbnService.get().then((response) => {
            this.bookList = response;
        });
    }
}

export const bookListComponent = {
    template,
    controller: BookListController
};
