import template from './book-form.html';

class BookFormController {
    constructor(isbnService) {
        this.isbnService = isbnService;
        if (this.details) {
            this.bookDetails = this.details;
        } else {
            this.bookDetails = {
                title: '',
                authorData: [
                    {
                        firstName: '',
                        lastName: ''
                    }
                ],
                pageCount: 100,
                isbn: ''
            };
        }
    }

    addRow(authorData) {
        authorData.push({
            firstName: '',
            lastName: ''
        });
    }
    removeRow(authorData, index) {
        authorData.splice(index, 1);
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
        details: '=?'
    },
    controller: BookFormController
};
