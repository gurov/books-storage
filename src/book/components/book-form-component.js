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

}

export const bookFormComponent = {
    template,
    bindings: {
        details: '=?'
    },
    controller: BookFormController
};
