import template from './book-details.html';

class BookDetailsController {
    constructor(isbnService, $stateParams) {
        this.isbnService = isbnService;
        this.bookDetails = this.details;
        this.isbn = $stateParams.isbn;
        //this.getBookDetails($stateParams.isbn);
    }

    //getBookDetails(isbn) {
    //    return this.isbnService.get(isbn).then((response) => {
    //        console.log(response);
    //        this.bookDetails = response;
    //    });
    //}

    authorsToString(authorData) {
        return authorData.map((author) => {
            return author.firstName + ' ' + author.lastName;
        }).join(', ');
    }
}

export const bookDetailsComponent = {
    template,
    bindings: {
        details: '='
    },
    controller: BookDetailsController
};
