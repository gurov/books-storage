import template from './book-details.html';

class BookDetailsController {
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

    authorsToString(authorData) {
        return authorData.map((author) => {
            return author.firstName + ' ' + author.lastName;
        }).join(', ');
    }
}

export const bookDetailsComponent = {
    template,
    controller: BookDetailsController
};
