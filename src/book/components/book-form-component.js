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

    addRow(authors) {
        authors.push({
            firstName: '',
            lastName: ''
        });
    }
    removeRow(authors, index) {
        authors.splice(index, 1);
    }

    check(isbnSource) {
        console.log(ISBN);
        console.log('9784873113685');
        var isbn10a = ISBN.parse(isbnSource);
        console.log(isbn10a.isIsbn10());
        console.log(isbn10a.isIsbn13());
    }

}

export const bookFormComponent = {
    template,
    bindings: {
        bookDetails: '='
    },
    controller: BookFormController
};
