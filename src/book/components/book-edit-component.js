import template from './book-edit.html';

class BookEditController {
    constructor(isbnService, $stateParams) {
        this.isbnService = isbnService;
        this.bookDetails = null;
        this.isbn = $stateParams.isbn;
        this.getBookDetails($stateParams.isbn);
    }

    getBookDetails(isbn) {
        return this.isbnService.get(isbn).then((response) => {
            this.bookDetails = response[0];
        });
    }

}

export const bookEditComponent = {
    template,
    controller: BookEditController
};
