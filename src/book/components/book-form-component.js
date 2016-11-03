import template from './book-form.html';

class BookFormController {
    constructor(isbnService) {
        this.isbnService = isbnService;
        this.bookDetails = {};
    }
}

export const bookFormComponent = {
    template,
    controller: BookFormController
};
