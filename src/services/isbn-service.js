import 'isbn';

export class IsbnService {
    constructor() {
    }

    isIsbn(text) {
        return ISBN.parse(text) !== null;
    }

    //  console.log(text);
    //  var isbn10a = ISBN.parse(isbnSource);
    //  console.log(isbn10a.isIsbn10());
    //  console.log(isbn10a.isIsbn13());
}
