import 'isbn';

export class IsbnService {
    constructor() {
    }

    isIsbn(text) {
        return ISBN.parse(text) !== null || text === '';
    }

    getAmazonImgUrl(isbn){
        let isbnObj = ISBN.parse(isbn);
        return 'http://images.amazon.com/images/P/' + isbnObj.asIsbn10() + '.01.20TRZZZZ.jpg';
    }

    //  console.log(text);
    //  var isbn10a = ISBN.parse(isbnSource);
    //  console.log(isbn10a.isIsbn10());
    //  console.log(isbn10a.isIsbn13());
}
