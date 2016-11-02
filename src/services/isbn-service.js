export class IsbnService {
    constructor($localForage) {
        this.localForage = $localForage;
    }
    get(isbnId) {
        return isbnId ?
            this.localForage.getItem('bookList') :
            this.localForage.getItem('bookListId');
    }

    verifyISBN10 (str) {
        str = str.replace(/x/g, 'X');
        str = str.replace(/[^0-9X]/g, '');
        if (str.length === 9) {
            str = '0' + str;
        }

        if (!str.match(/^[0-9]{9}[0-9X]$/)) {
            return 0;
        }

        var chars = str.split("");
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

    convertISBN10(isbn10) {
        var chars = isbn10.split("");
        chars.unshift("9", "7", "8");
        chars.pop();

        var i = 0;
        var sum = 0;
        for (i = 0; i < 12; i += 1) {
            sum += chars[i] * ((i % 2) ? 3 : 1);
        }
        var check_digit = (10 - (sum % 10)) % 10;
        chars.push(check_digit);

        var isbn13 = chars.join("");
        return isbn13;
    }

    demo(input) {
        var result = $('#result');
        var isbn10 = verifyISBN10($('#isbn10').val());
        var result_str = "INVALID ISBN-10";
        if (isbn10) {
            var isbn13 = convertISBN10(isbn10);
            result_str = "ISBN-13: " + isbn13;
        }
        result.html(result_str);
    }




}
