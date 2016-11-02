import template from './book-details.html';

class BookDetailsController {
    constructor(isbnService, $stateParams) {
        this.isbnService = isbnService;
        this.dookDetails = null;
        this.isbn = $stateParams.isbn;
        this.getBookDetails();
    }

    getBookDetails() {
console.log(this.stateParams);
        //return this.isbnService.get().then((response) => {
        //    this.bookList = response;
        //    if (!response) {
        //        this.bookList = defaultBookList;
        //    }
        //});
    }
}

export const bookDetailsComponent = {
    template,
    controller: BookDetailsController
};
