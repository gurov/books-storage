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

    newBook() {
        this.activeBook = this.bookService.getPattern();
        this.startEdit = true;
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
        return this.bookService.setDefault().then(() => {
            this.update();
        });
    }

    save(form) {
        if (!form.$valid || !this.isbnService.isIsbn(this.activeBook.isbn)) {
            return;
        }

        console.log(this.bookList);
        let n = this.bookList.filter((book) => {
            return book.key === this.activeBook.key;
        }).length;
        if (n === 0) {
            this.bookList.push(this.activeBook);
        }
        this.bookService.save().then(() => {
            this.startEdit = false;
        });
    }

    cancel() {
        return this.update().then(() => {
            this.startEdit = false;
            this.activeBook = null;
        });
    }

}

export const bookListComponent = {
    template,
    controller: BookListController
};
