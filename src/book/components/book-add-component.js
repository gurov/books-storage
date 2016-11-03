import template from './book-add.html';

class BookAddController {
    constructor(isbnService) {
        this.isbnService = isbnService;
        this.bookDetails = {};
    }
}

export const bookAddComponent = {
    template,
    controller: BookAddController
};
