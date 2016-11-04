import template from './book-form.html';

class BookFormController {
    constructor(isbnService) {
        this.isbnService = isbnService;
        this.cropper = {
            sourceImage: null,
            croppedImage: null
        };
        this.bounds = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
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

    cancel() {
        console.log(this.bookDetails);
    }

}

export const bookFormComponent = {
    template,
    bindings: {
        bookDetails: '=',
        startEdit: '='
    },
    controller: BookFormController
};
