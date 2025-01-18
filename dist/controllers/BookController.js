"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const Books_1 = require("../models/Books");
const ResponseModels_1 = require("../models/ResponseModels");
class BookController {
    constructor(bookService) {
        this.bookService = bookService;
    }
    getAllBooks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const books = yield this.bookService.getAllBooks();
                res.json(new ResponseModels_1.ResponseModel(true, "Books retrieved successfully", books));
            }
            catch (error) {
                res.status(500).json(new ResponseModels_1.ResponseModel(false, 'An unexpected error occurred', null));
            }
        });
    }
    addBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, title, author } = req.body;
            const book = new Books_1.Book(id, title, author);
            try {
                yield this.bookService.addBook(book);
                res.status(201).json(new ResponseModels_1.ResponseModel(true, "Book added successfully", null));
            }
            catch (error) {
                res.status(400).json(new ResponseModels_1.ResponseModel(false, 'An unexpected error occurred', null));
            }
        });
    }
}
exports.BookController = BookController;
