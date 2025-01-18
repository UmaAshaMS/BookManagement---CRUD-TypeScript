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
exports.MemberService = void 0;
class MemberService {
    constructor() {
        this.members = [];
    }
    getAllMembers() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => setTimeout(() => resolve(this.members), 1000));
        });
    }
    addMember(member) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (!member.name) {
                        reject(new Error("Invalid member data"));
                    }
                    else {
                        this.members.push(member);
                        resolve();
                    }
                }, 1000);
            });
        });
    }
    borrowBook(memberId, bookId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const member = this.members.find((m) => m.id === memberId);
                    if (!member) {
                        reject(new Error("Member not found"));
                        return;
                    }
                    member.borrowedBooks.push(bookId);
                    resolve(true);
                }, 1000);
            });
        });
    }
    returnBook(memberId, bookId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const member = this.members.find((m) => m.id === memberId);
                    if (!member) {
                        reject(new Error("Member not found"));
                        return;
                    }
                    member.borrowedBooks = member.borrowedBooks.filter((id) => id !== bookId);
                    resolve(true);
                }, 1000);
            });
        });
    }
}
exports.MemberService = MemberService;
