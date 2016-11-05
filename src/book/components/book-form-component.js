import template from './book-form.html';

class BookFormController {
    constructor(isbnService, bookService) {
        this.isbnService = isbnService;
        this.bookService = bookService;
        this.cropper = {
            sourceImage: null,
            croppedImage: null
        };
    }

    isIsbn(text) {
        return this.isbnService.isIsbn(text) || text === '';
    }

    addRow(authors) {
        authors.push({
            firstName: '',
            lastName: ''
        });
    }

    removeRow(authors, index) {
        authors.splice(index, 1);
    }

    check(text) {
        return text;
    }

}

export const bookFormComponent = {
    template,
    bindings: {
        bookDetails: '='
    },
    controller: BookFormController
};
