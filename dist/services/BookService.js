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
exports.BookService = void 0;
class BookService {
    constructor() {
        this.books = [];
    }
    getAllBooks() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => setTimeout(() => resolve(this.books), 1000));
        });
    }
    addBook(book) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (!book.title || !book.author) {
                        reject(new Error("Invalid book data"));
                    }
                    else {
                        this.books.push(book);
                        resolve();
                    }
                }, 1000);
            });
        });
    }
    updateBook(bookId, updatedData) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const bookIndex = this.books.findIndex((b) => b.id === bookId);
                    if (bookIndex === -1) {
                        reject(new Error("Book not found"));
                    }
                    else {
                        this.books[bookIndex] = Object.assign(Object.assign({}, this.books[bookIndex]), updatedData);
                        resolve(true);
                    }
                }, 1000);
            });
        });
    }
    deleteBook(bookId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const bookIndex = this.books.findIndex((b) => b.id === bookId);
                    if (bookIndex === -1) {
                        reject(new Error("Book not found"));
                    }
                    else {
                        this.books.splice(bookIndex, 1);
                        resolve(true);
                    }
                }, 1000);
            });
        });
    }
}
exports.BookService = BookService;
