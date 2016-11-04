import {defaultBookList} from '../data/default-book-list';
import ISBN from 'isbn';

export class IsbnService {
    constructor($localForage, $q) {
        this.localForage = $localForage;
        this.q = $q;
    }
    get(isbn) {
        if (isbn) {
            let deferred = this.q.defer();
            this.localForage.getItem('bookList').then((response) => {
                deferred.resolve(response.filter((b) => b.isbn === isbn)[0]);
            });
            return deferred.promise;
        } else {
            return this.localForage.getItem('bookList');
        }
    }

    setDefault() {
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
