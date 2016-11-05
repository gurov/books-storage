import template from './book-list.html';

class BookListController {
    constructor(isbnService, bookService, $localForage) {
        this.isbnService = isbnService;
        this.bookService = bookService;
        this.localForage = $localForage;
        this.bookList = [];
        this.order = 'title';

        this.localForage.getItem('bookOrderBy').then((response) => {
            this.order = response || 'title';
        });

        this.activeBook = null;
        this.startEdit = false;
        this.update();
    }

    setOrder(order) {
        this.order = order;
        this.localForage.setItem('bookOrderBy', order);
    }

    update() {
        return this.bookService.get().then((response) => {
            this.bookList = response;
        });
    }

    setDefaultBookList() {
        return this.bookService.setDefault();
    }

    save() {
        return this.bookService.save().then(() => {
            this.startEdit = false;
        });
    }

    cancel() {
        return this.update().then((response) => {
            this.startEdit = false;
        });
    }

}

export const bookListComponent = {
    template,
    controller: BookListController
};
