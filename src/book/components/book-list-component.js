import template from './book-list.html';

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
            if (!response) {
                this.isbnService.setDefault();
            }
        });
    }
}

export const bookListComponent = {
    template,
    controller: BookListController
};
