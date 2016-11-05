import 'isbn';

export class IsbnService {

    isIsbn(text) {
        return ISBN.parse(text) !== null || text === '';
    }

    toIsbn10(isbn) {
        let isbnObj = ISBN.parse(isbn);
        return isbnObj.asIsbn10();
    }

    getAmazonImgUrl(isbn) {
        let isbnObj = ISBN.parse(isbn);
        return 'http://images.amazon.com/images/P/' + isbnObj.asIsbn10() + '.01.20TRZZZZ.jpg';
    }
}
