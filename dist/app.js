webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\n__webpack_require__(1);\n\n__webpack_require__(2);\n\n__webpack_require__(11);\n\n__webpack_require__(13);\n\nvar _angular = __webpack_require__(15);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\n__webpack_require__(17);\n\n__webpack_require__(18);\n\n__webpack_require__(20);\n\n__webpack_require__(21);\n\n__webpack_require__(22);\n\n__webpack_require__(23);\n\n__webpack_require__(24);\n\nvar _book = __webpack_require__(25);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_angular2.default.module('app', ['ui.router', 'LocalForageModule', 'mgcrea.ngStrap', 'ui.bootstrap.validation', 'angular-img-cropper', '720kb.datepicker', _book.book.name]);\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app.js\n// module id = 0\n// module chunks = 0\n//# sourceURL=webpack:///./src/app.js?");

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app.css\n// module id = 13\n// module chunks = 0\n//# sourceURL=webpack:///./src/app.css?");

/***/ },
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.book = undefined;\n\nvar _angular = __webpack_require__(15);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _bookListComponent = __webpack_require__(26);\n\nvar _bookDetailsComponent = __webpack_require__(28);\n\nvar _bookFormComponent = __webpack_require__(30);\n\nvar _isbnService = __webpack_require__(32);\n\nvar _bookService = __webpack_require__(34);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * @namespace book */\nvar book = exports.book = _angular2.default.module('book', ['ui.router']).service('isbnService', _isbnService.IsbnService).service('bookService', _bookService.BookService).component('cBookList', _bookListComponent.bookListComponent).component('cBookDetails', _bookDetailsComponent.bookDetailsComponent).component('cBookForm', _bookFormComponent.bookFormComponent).config(function ($stateProvider) {\n    $stateProvider.state('book', {\n        url: '/book',\n        abstract: true,\n        template: '<ui-view/>'\n    }).state('book.list', {\n        url: '/list',\n        template: '<c-book-list></c-book-list>'\n    });\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/book/book.js\n// module id = 25\n// module chunks = 0\n//# sourceURL=webpack:///./src/book/book.js?");

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.bookListComponent = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _bookList = __webpack_require__(27);\n\nvar _bookList2 = _interopRequireDefault(_bookList);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar BookListController = function () {\n    function BookListController(isbnService, bookService, $localForage) {\n        var _this = this;\n\n        _classCallCheck(this, BookListController);\n\n        this.isbnService = isbnService;\n        this.bookService = bookService;\n        this.localForage = $localForage;\n        this.bookList = [];\n        this.order = 'title';\n\n        this.localForage.getItem('bookOrderBy').then(function (response) {\n            _this.order = response || 'title';\n        });\n\n        this.activeBook = null;\n        this.startEdit = false;\n        this.update();\n    }\n\n    _createClass(BookListController, [{\n        key: 'newBook',\n        value: function newBook() {\n            this.activeBook = this.bookService.getPattern();\n            this.startEdit = true;\n        }\n    }, {\n        key: 'setOrder',\n        value: function setOrder(order) {\n            this.order = order;\n            this.localForage.setItem('bookOrderBy', order);\n        }\n    }, {\n        key: 'update',\n        value: function update() {\n            var _this2 = this;\n\n            return this.bookService.get().then(function (response) {\n                _this2.bookList = response;\n            });\n        }\n    }, {\n        key: 'setDefaultBookList',\n        value: function setDefaultBookList() {\n            var _this3 = this;\n\n            return this.bookService.setDefault().then(function () {\n                _this3.update();\n            });\n        }\n    }, {\n        key: 'save',\n        value: function save(form) {\n            var _this4 = this;\n\n            if (!form.$valid || !this.isbnService.isIsbn(this.activeBook.isbn)) {\n                return;\n            }\n\n            console.log(this.bookList);\n            var n = this.bookList.filter(function (book) {\n                return book.key === _this4.activeBook.key;\n            }).length;\n            if (n === 0) {\n                this.bookList.push(this.activeBook);\n            }\n            this.bookService.save().then(function () {\n                _this4.startEdit = false;\n            });\n        }\n    }, {\n        key: 'cancel',\n        value: function cancel() {\n            var _this5 = this;\n\n            return this.update().then(function () {\n                _this5.startEdit = false;\n                _this5.activeBook = null;\n            });\n        }\n    }]);\n\n    return BookListController;\n}();\n\nvar bookListComponent = exports.bookListComponent = {\n    template: _bookList2.default,\n    controller: BookListController\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/book/components/book-list-component.js\n// module id = 26\n// module chunks = 0\n//# sourceURL=webpack:///./src/book/components/book-list-component.js?");

/***/ },
/* 27 */
/***/ function(module, exports) {

	eval("module.exports = \"<div class=\\\"clearfix\\\">\\n    <h1>\\n        <button class=\\\"btn btn-default pull-right\\\"\\n                ng-click=\\\"$ctrl.setDefaultBookList()\\\">Set default data</button>\\n        Books\\n    </h1>\\n</div>\\n\\n<div class=\\\"row\\\">\\n    <div class=\\\"col-md-5\\\">\\n        <div class=\\\"panel panel-default\\\">\\n            <div class=\\\"panel-body panel-grey\\\">\\n                <div class=\\\"row\\\">\\n                    <div class=\\\"col-xs-8\\\">\\n                        <div class=\\\"input-group\\\">\\n                            <input type=\\\"text\\\"\\n                                   ng-model=\\\"search\\\"\\n                                   placeholder=\\\"Search ...\\\"\\n                                   class=\\\"form-control\\\">\\n                            <div class=\\\"input-group-btn\\\">\\n                                <button type=\\\"button\\\"\\n                                        class=\\\"btn btn-default dropdown-toggle\\\"\\n                                        data-toggle=\\\"dropdown\\\"\\n                                        bs-dropdown\\n                                        aria-haspopup=\\\"true\\\"\\n                                        aria-expanded=\\\"false\\\">\\n                                    <span class=\\\"glyphicon glyphicon-filter\\\"></span>\\n                                    <span class=\\\"capitalize\\\">{{$ctrl.order}}</span>\\n                                    <span class=\\\"caret\\\"></span></button>\\n                                <ul class=\\\"dropdown-menu\\\" role=\\\"menu\\\" ng-model=\\\"$ctrl.order\\\">\\n                                    <li>\\n                                        <a href=\\\"\\\" ng-click=\\\"$ctrl.setOrder('title')\\\">Title</a>\\n                                    </li>\\n                                    <li>\\n                                        <a href=\\\"\\\" ng-click=\\\"$ctrl.setOrder('year')\\\">Year</a>\\n                                    </li>\\n                                </ul>\\n                            </div><!-- /btn-group -->\\n                        </div><!-- /input-group -->\\n                    </div>\\n                    <div class=\\\"col-xs-4\\\">\\n                        <a class=\\\"btn btn-primary btn-block\\\"\\n                           href=\\\"\\\"\\n                           ng-click=\\\"$ctrl.newBook()\\\">\\n                            <span class=\\\"glyphicon glyphicon-plus\\\"></span>\\n                            Add\\n                        </a>\\n                    </div>\\n                </div>\\n            </div>\\n            <div class=\\\"list-group\\\">\\n                <a class=\\\"list-group-item\\\"\\n                   href=\\\"\\\"\\n                   ng-repeat=\\\"book in $ctrl.bookList | orderBy:$ctrl.order | filter:search\\\"\\n                   ng-class=\\\"{'active':book.key == $ctrl.activeBook.key}\\\"\\n                   ng-click=\\\"$ctrl.activeBook = book\\\">\\n                    <span class=\\\"glyphicon glyphicon-chevron-right pull-right arrow-middle\\\"></span>\\n                    <h4 class=\\\"list-group-item-heading\\\">{{book.title}}</h4>\\n                    <p class=\\\"list-group-item-text\\\">\\n                        by {{book.authors[0].firstName}} {{book.authors[0].lastName}},\\n                        {{book.year}}\\n                    </p>\\n                </a>\\n            </div>\\n        </div>\\n    </div>\\n    <div class=\\\"col-md-7\\\">\\n        <div class=\\\"well well-lg text-center\\\" ng-if=\\\"!$ctrl.activeBook\\\">\\n            Please, select the book\\n        </div>\\n\\n        <div class=\\\"panel panel-default\\\" ng-if=\\\"$ctrl.activeBook && !$ctrl.startEdit\\\" >\\n            <div class=\\\"panel-body  panel-grey clearfix\\\">\\n                <p class=\\\"form-control-static pull-left\\\">\\n                    Book details\\n                </p>\\n                <button class=\\\"btn btn-primary pull-right\\\"\\n                        ng-click=\\\"$ctrl.startEdit = true\\\">\\n                    <span class=\\\"glyphicon glyphicon-edit\\\"></span>\\n                    Edit\\n                </button>\\n            </div>\\n            <div class=\\\"panel-body\\\">\\n                <c-book-details book-details=\\\"$ctrl.activeBook\\\"></c-book-details>\\n            </div>\\n        </div>\\n\\n        <div class=\\\"panel panel-default\\\" ng-if=\\\"$ctrl.activeBook && $ctrl.startEdit\\\">\\n            <form name=\\\"editForm\\\"\\n                  novalidate\\n                  ui-validation-submit=\\\"$ctrl.save(editForm)\\\">\\n            <div class=\\\"panel-body panel-grey\\\">\\n                <div class=\\\"row\\\">\\n                    <div class=\\\"col-xs-6\\\">\\n                        <p class=\\\"form-control-static\\\">Edit</p>\\n                    </div>\\n                    <div class=\\\"col-xs-6 text-right\\\">\\n                        <button type=\\\"button\\\"\\n                                class=\\\"btn btn-default\\\"\\n                                ng-click=\\\"$ctrl.cancel()\\\">Cancel</button>\\n                        <button type=\\\"submit\\\"\\n                                class=\\\"btn btn-primary\\\">\\n                            <span class=\\\"glyphicon glyphicon-save\\\"></span> Save\\n                        </button>\\n                    </div>\\n                </div>\\n            </div>\\n            <div class=\\\"panel-body\\\">\\n                <c-book-form book-details=\\\"$ctrl.activeBook\\\"></c-book-form>\\n            </div>\\n            </form>\\n        </div>\\n\\n    </div>\\n</div>\\n\";\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/book/components/book-list.html\n// module id = 27\n// module chunks = 0\n//# sourceURL=webpack:///./src/book/components/book-list.html?");

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.bookDetailsComponent = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _bookDetails = __webpack_require__(29);\n\nvar _bookDetails2 = _interopRequireDefault(_bookDetails);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar BookDetailsController = function () {\n    function BookDetailsController(isbnService) {\n        _classCallCheck(this, BookDetailsController);\n\n        this.isIsbn = isbnService.isIsbn;\n        this.getAmazonImgUrl = isbnService.getAmazonImgUrl;\n    }\n\n    _createClass(BookDetailsController, [{\n        key: 'authorsToString',\n        value: function authorsToString(authors) {\n            return authors.map(function (author) {\n                return author.firstName + ' ' + author.lastName;\n            }).join(', ');\n        }\n    }]);\n\n    return BookDetailsController;\n}();\n\nvar bookDetailsComponent = exports.bookDetailsComponent = {\n    template: _bookDetails2.default,\n    bindings: {\n        bookDetails: '='\n    },\n    controller: BookDetailsController\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/book/components/book-details-component.js\n// module id = 28\n// module chunks = 0\n//# sourceURL=webpack:///./src/book/components/book-details-component.js?");

/***/ },
/* 29 */
/***/ function(module, exports) {

	eval("module.exports = \"<div class=\\\"row\\\">\\n    <div class=\\\"col-xs-4\\\">\\n        <div class=\\\"thumbnail\\\" ng-if=\\\"$ctrl.bookDetails.image\\\">\\n            <img ng-src=\\\"{{$ctrl.bookDetails.image}}\\\"\\n                 alt=\\\"{{$ctrl.bookDetails.title}}\\\">\\n        </div>\\n        <div class=\\\"thumbnail\\\" ng-if=\\\"!$ctrl.bookDetails.image && $ctrl.bookDetails.isbn && $ctrl.isIsbn($ctrl.bookDetails.isbn)\\\">\\n            <img ng-src=\\\"{{$ctrl.getAmazonImgUrl($ctrl.bookDetails.isbn)}}\\\"\\n                 alt=\\\"{{$ctrl.bookDetails.title}} (Image from Amazon)\\\">\\n        </div>\\n    </div>\\n    <div class=\\\"col-xs-8\\\">\\n\\n        <div ng-if=\\\"$ctrl.bookDetails\\\">\\n            <h3 class=\\\"details-header\\\">\\n                <strong>{{$ctrl.bookDetails.title}}</strong>\\n            </h3>\\n            <h6>\\n                by <strong>{{$ctrl.authorsToString($ctrl.bookDetails.authors)}}</strong>\\n            </h6>\\n\\n            <table class=\\\"table table-condensed book-options\\\">\\n                <thead>\\n                <tr>\\n                    <th class=\\\"width40\\\">Options</th>\\n                    <th></th>\\n                </tr>\\n                </thead>\\n                <tbody>\\n                <tr>\\n                    <td>ISBN</td>\\n                    <td>{{$ctrl.bookDetails.isbn}}</td>\\n                </tr>\\n                <tr>\\n                    <td>Publisher name</td>\\n                    <td>{{$ctrl.bookDetails.publisherName}}</td>\\n                </tr>\\n                <tr>\\n                    <td>Number of pages</td>\\n                    <td>{{$ctrl.bookDetails.pageCount}}</td>\\n                </tr>\\n                <tr>\\n                    <td>Publication year</td>\\n                    <td>{{$ctrl.bookDetails.year}}</td>\\n                </tr>\\n                <tr>\\n                    <td>Print date</td>\\n                    <td>{{$ctrl.bookDetails.printDate}}</td>\\n                </tr>\\n                </tbody>\\n            </table>\\n        </div>\\n    </div>\\n</div>\\n\\n\\n\\n\\n\";\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/book/components/book-details.html\n// module id = 29\n// module chunks = 0\n//# sourceURL=webpack:///./src/book/components/book-details.html?");

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.bookFormComponent = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _bookForm = __webpack_require__(31);\n\nvar _bookForm2 = _interopRequireDefault(_bookForm);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar BookFormController = function () {\n    function BookFormController(isbnService, bookService) {\n        _classCallCheck(this, BookFormController);\n\n        this.isbnService = isbnService;\n        this.bookService = bookService;\n        this.isIsbn = this.isbnService.isIsbn;\n        this.cropper = {\n            sourceImage: null,\n            croppedImage: null\n        };\n    }\n\n    _createClass(BookFormController, [{\n        key: 'addRow',\n        value: function addRow(authors) {\n            authors.push({\n                firstName: '',\n                lastName: ''\n            });\n        }\n    }, {\n        key: 'removeRow',\n        value: function removeRow(authors, index) {\n            authors.splice(index, 1);\n        }\n    }, {\n        key: 'check',\n        value: function check(text) {\n            return text;\n        }\n    }]);\n\n    return BookFormController;\n}();\n\nvar bookFormComponent = exports.bookFormComponent = {\n    template: _bookForm2.default,\n    bindings: {\n        bookDetails: '='\n    },\n    controller: BookFormController\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/book/components/book-form-component.js\n// module id = 30\n// module chunks = 0\n//# sourceURL=webpack:///./src/book/components/book-form-component.js?");

/***/ },
/* 31 */
/***/ function(module, exports) {

	eval("module.exports = \"<div class=\\\"form-group\\\" ng-class=\\\"{'has-error':!$ctrl.isIsbn($ctrl.bookDetails.isbn)}\\\">\\n    <label>ISBN</label>\\n    <input type=\\\"text\\\"\\n           ng-model=\\\"$ctrl.bookDetails.isbn\\\"\\n           ng-model-options=\\\"{debounce:300}\\\"\\n           class=\\\"form-control\\\">\\n</div>\\n<div class=\\\"form-group\\\" ui-validation-show-errors>\\n    <label>Title *</label>\\n    <input type=\\\"text\\\"\\n           ng-model=\\\"$ctrl.bookDetails.title\\\"\\n           name=\\\"title\\\"\\n           required\\n           ng-maxlength=\\\"30\\\"\\n           class=\\\"form-control\\\">\\n    <ui-validation-error-messages>\\n</div>\\n<div>\\n    <label>Authors</label>\\n    <table class=\\\"table table-condensed authors\\\">\\n        <thead>\\n        <tr>\\n            <th>First name *</th>\\n            <th>Last name *</th>\\n            <th></th>\\n        </tr>\\n        </thead>\\n        <tbody>\\n        <tr ng-repeat=\\\"author in $ctrl.bookDetails.authors\\\">\\n            <td>\\n                <div class=\\\"form-group\\\" ui-validation-show-errors>\\n                    <input type=\\\"text\\\"\\n                           required\\n                           ng-maxlength=\\\"20\\\"\\n                           ng-model=\\\"author.firstName\\\"\\n                           name=\\\"firstName\\\"\\n                           class=\\\"form-control\\\">\\n                    <ui-validation-error-messages>\\n                </div>\\n            </td>\\n            <td>\\n                <div class=\\\"form-group\\\" ui-validation-show-errors>\\n                    <input type=\\\"text\\\"\\n                           required\\n                           ng-model=\\\"author.lastName\\\"\\n                           ng-maxlength=\\\"20\\\"\\n                           name=\\\"lastName\\\"\\n                           class=\\\"form-control\\\">\\n                    <ui-validation-error-messages>\\n                </div>\\n            </td>\\n            <td>\\n                <span class=\\\"glyphicon glyphicon-remove cursor-pointer\\\"\\n                      ng-if=\\\"$ctrl.bookDetails.authors.length > 1\\\"\\n                      ng-click=\\\"$ctrl.removeRow($ctrl.bookDetails.authors, $index)\\\"\\n                      title=\\\"Remove\\\"></span>\\n            </td>\\n        </tr>\\n        <tr>\\n            <td>\\n                <button class=\\\"btn btn-default btn-xs\\\"\\n                        ng-click=\\\"$ctrl.addRow($ctrl.bookDetails.authors)\\\">\\n                    <span class=\\\"glyphicon glyphicon-plus\\\"></span>\\n                    Add author\\n                </button>\\n            </td>\\n            <td></td>\\n            <td></td>\\n        </tr>\\n        </tbody>\\n    </table>\\n</div>\\n<div class=\\\"row\\\">\\n    <div class=\\\"col-xs-6\\\">\\n        <div class=\\\"form-group\\\" ui-validation-show-errors>\\n            <label>Number of pages *</label>\\n            <input type=\\\"number\\\"\\n                   required\\n                   ng-model=\\\"$ctrl.bookDetails.pageCount\\\"\\n                   name=\\\"pageCount\\\"\\n                   ng-min=\\\"1\\\"\\n                   ng-max=\\\"10000\\\"\\n                   class=\\\"form-control\\\">\\n            <ui-validation-error-messages>\\n        </div>\\n        <div class=\\\"form-group\\\" ui-validation-show-errors>\\n            <label>Publication year</label>\\n            <input type=\\\"number\\\"\\n                   ng-model=\\\"$ctrl.bookDetails.year\\\"\\n                   name=\\\"year\\\"\\n                   ng-min=\\\"1800\\\"\\n                   class=\\\"form-control\\\">\\n            <ui-validation-error-messages>\\n        </div>\\n        <div class=\\\"form-group\\\" ui-validation-show-errors>\\n            <label>Print date</label>\\n            <datepicker\\n                    date-min-limit=\\\"1800-01-01\\\"\\n                    date-typer=\\\"true\\\"\\n                    date-format=\\\"yyyy-MM-dd\\\">\\n                <input ng-model=\\\"$ctrl.bookDetails.printDate\\\"\\n                       name=\\\"printDate\\\"\\n                       class=\\\"form-control\\\"\\n                       type=\\\"text\\\"/>\\n            </datepicker>\\n            <ui-validation-error-messages>\\n        </div>\\n    </div>\\n    <div class=\\\"col-xs-6\\\"></div>\\n</div>\\n<div class=\\\"form-group\\\">\\n    <label>Image</label>\\n    <div class=\\\"row\\\">\\n        <div class=\\\"col-xs-3\\\">\\n            <div ng-show=\\\"$ctrl.bookDetails.image!=null\\\" class=\\\"thumbnail\\\">\\n                <img ng-src=\\\"{{$ctrl.bookDetails.image}}\\\" />\\n            </div>\\n        </div>\\n        <div class=\\\"col-xs-9\\\">\\n            <canvas image-cropper\\n                    class=\\\"hidden\\\"\\n                    image=\\\"$ctrl.cropper.sourceImage\\\"\\n                    cropped-image=\\\"$ctrl.bookDetails.image\\\"\\n                    crop-width=\\\"170\\\"\\n                    crop-height=\\\"250\\\"\\n                    keep-aspect=\\\"true\\\"\\n                    touch-radius=\\\"30\\\"></canvas>\\n        </div>\\n    </div>\\n    <input type=\\\"file\\\"\\n           img-cropper-fileread\\n           image=\\\"$ctrl.cropper.sourceImage\\\" />\\n\\n</div>\\n\";\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/book/components/book-form.html\n// module id = 31\n// module chunks = 0\n//# sourceURL=webpack:///./src/book/components/book-form.html?");

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.IsbnService = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\n__webpack_require__(33);\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar IsbnService = exports.IsbnService = function () {\n    function IsbnService() {\n        _classCallCheck(this, IsbnService);\n    }\n\n    _createClass(IsbnService, [{\n        key: 'isIsbn',\n        value: function isIsbn(text) {\n            return ISBN.parse(text) !== null || text === '';\n        }\n    }, {\n        key: 'toIsbn10',\n        value: function toIsbn10(isbn) {\n            var isbnObj = ISBN.parse(isbn);\n            return isbnObj.asIsbn10();\n        }\n    }, {\n        key: 'getAmazonImgUrl',\n        value: function getAmazonImgUrl(isbn) {\n            var isbnObj = ISBN.parse(isbn);\n            return 'http://images.amazon.com/images/P/' + isbnObj.asIsbn10() + '.01.20TRZZZZ.jpg';\n        }\n    }]);\n\n    return IsbnService;\n}();\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/services/isbn-service.js\n// module id = 32\n// module chunks = 0\n//# sourceURL=webpack:///./src/services/isbn-service.js?");

/***/ },
/* 33 */,
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.BookService = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _defaultBookList = __webpack_require__(35);\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar BookService = exports.BookService = function () {\n    function BookService($localForage) {\n        _classCallCheck(this, BookService);\n\n        this.localForage = $localForage;\n        this.list = [];\n    }\n\n    _createClass(BookService, [{\n        key: 'getPattern',\n        value: function getPattern() {\n            return {\n                key: Math.random().toString(),\n                title: '',\n                authors: [{\n                    firstName: '',\n                    lastName: ''\n                }],\n                pageCount: 1,\n                publisherName: '',\n                year: 2000,\n                printDate: '',\n                isbn: '',\n                image: null\n            };\n        }\n    }, {\n        key: 'get',\n        value: function get() {\n            var _this = this;\n\n            return this.localForage.getItem('bookList').then(function (response) {\n                _this.list = response;\n                return response || [];\n            });\n        }\n    }, {\n        key: 'setDefault',\n        value: function setDefault() {\n            return this.localForage.setItem('bookList', _defaultBookList.defaultBookList);\n        }\n    }, {\n        key: 'save',\n        value: function save() {\n            return this.localForage.setItem('bookList', this.list);\n        }\n    }]);\n\n    return BookService;\n}();\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/services/book-service.js\n// module id = 34\n// module chunks = 0\n//# sourceURL=webpack:///./src/services/book-service.js?");

/***/ },
/* 35 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar defaultBookList = exports.defaultBookList = [{\n    key: '1',\n    title: 'Harry Potter and the stone',\n    authors: [{\n        firstName: 'J. K.',\n        lastName: 'Rowling'\n    }, {\n        firstName: 'Mary',\n        lastName: 'Grandpre'\n    }],\n    pageCount: 309,\n    publisherName: 'Arthur A. Levine Books',\n    year: 1998,\n    printDate: '1998-10-11',\n    isbn: '9780590353427',\n    image: null\n}, {\n    key: '2',\n    title: 'Principles of solid mechanics',\n    authors: [{\n        firstName: 'Rowland',\n        lastName: 'Richards'\n    }],\n    pageCount: 122,\n    publisherName: 'CRC Press',\n    year: 1997,\n    printDate: '1998-10-11',\n    isbn: '084930315X',\n    image: null\n}];\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/data/default-book-list.js\n// module id = 35\n// module chunks = 0\n//# sourceURL=webpack:///./src/data/default-book-list.js?");

/***/ }
]);