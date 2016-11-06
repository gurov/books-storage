import {defaultBookList} from '../data/default-book-list';

export class BookService {
    constructor($localForage) {
        this.localForage = $localForage;
        this.list = [];
    }

    getPattern() {
        return {
            key: Math.random().toString(),
            title: '',
            authors: [{
                firstName: '',
                lastName: ''
            }],
            pageCount: 1,
            publisherName: '',
            year: 2000,
            printDate: '',
            isbn: '',
            image: null
        };
    }

    get() {
        return this.localForage.getItem('bookList').then((response) => {
            this.list = response;
            return response || [];
        });
    }

    setDefault() {
        return this.localForage.setItem('bookList', defaultBookList);
    }

    save() {
        return this.localForage.setItem('bookList', this.list);
    }

}
