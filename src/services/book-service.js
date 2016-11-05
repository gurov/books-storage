import {defaultBookList} from '../data/default-book-list';

export class BookService {
    constructor($localForage) {
        this.localForage = $localForage;
        this.list = [];
    }

    get() {
        return this.localForage.getItem('bookList').then((response) => {
            this.list = response;
            return response;
        });
    }

    setDefault() {
        return this.localForage.setItem('bookList', defaultBookList);
    }

    save() {
        return this.localForage.setItem('bookList', this.list);
    }

}
