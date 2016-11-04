import template from './book-edit.html';

class BookEditController {
    constructor(isbnService) {
        this.isbnService = isbnService;
    }
}

export const bookEditComponent = {
    template,
    bindings: {
        bookDetails: '='
    },
    controller: BookEditController
};
