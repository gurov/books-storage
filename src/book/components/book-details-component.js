import template from './book-details.html';

class BookDetailsController {
    constructor(isbnService) {
        this.isIsbn = isbnService.isIsbn;
        this.getAmazonImgUrl = isbnService.getAmazonImgUrl;
    }

    authorsToString(authors) {
        return authors.map((author) => {
            return author.firstName + ' ' + author.lastName;
        }).join(', ');
    }
}

export const bookDetailsComponent = {
    template,
    bindings: {
        bookDetails: '='
    },
    controller: BookDetailsController
};
