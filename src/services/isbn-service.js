export class IsbnService {
    constructor($localForage) {
        this.localForage = $localForage;
    }
    get(isbnId) {
        return isbnId ?
            this.localForage.getItem('bookList') :
            this.localForage.getItem('bookListId');
    }
}
