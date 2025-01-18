"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
class Member {
    constructor(id, name, borrowedBooks = [] // List of borrowed book IDs
    ) {
        this.id = id;
        this.name = name;
        this.borrowedBooks = borrowedBooks;
    }
}
exports.Member = Member;
