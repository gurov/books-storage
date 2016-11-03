import {defaultBookList} from '../data/default-book-list';

export class IsbnService {
    constructor($localForage) {
        this.localForage = $localForage;
    }
    get(isbn) {
        if (isbn) {
            return this.localForage.getItem('bookList');
        } else {
            return this.localForage.getItem('bookList');
        }
        //  return isbnId ?
        //
        //    this.localForage.getItem('bookListId');
    }

    setDefault() {
        console.log(defaultBookList);
        return this.localForage.setItem('bookList', defaultBookList);
    }

    verifyIsbn10(str) {
        str = str.replace(/x/g, 'X');
        str = str.replace(/[^0-9X]/g, '');
        if (str.length === 9) {
            str = '0' + str;
        }

        if (!str.match(/^[0-9]{9}[0-9X]$/)) {
            return 0;
        }

        var chars = str.split('');
        var sum = 0;
        var i = 0;

        for (i = 0; i < 10; i += 1) {
            sum += (chars[i] === 'X' ? 10 : chars[i]) * (10 - i);
        }

        if (sum % 11 !== 0) {
            return 0;
        }
        return str;
    }

    convertIsbnTo13(isbn10) {
        var chars = isbn10.split('');
        chars.unshift('9', '7', '8');
        chars.pop();

        var i = 0;
        var sum = 0;
        for (i = 0; i < 12; i += 1) {
            sum += chars[i] * ((i % 2) ? 3 : 1);
        }
        chars.push((10 - (sum % 10)) % 10);

        return chars.join('');
    }

}
