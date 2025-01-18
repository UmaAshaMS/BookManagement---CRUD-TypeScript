import { Book } from "../models/Books";

export class BookService {
  private books: Book[] = [];

  async getAllBooks(): Promise<Book[]> {
    return new Promise((resolve) =>
      setTimeout(() => resolve(this.books), 1000)
    );
  }

  async addBook(book: Book): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!book.title || !book.author) {
          reject(new Error("Invalid book data"));
        } else {
          this.books.push(book);
          resolve();
        }
      }, 1000);
    });
  }

  async updateBook(bookId: string, updatedData: Partial<Book>): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const bookIndex = this.books.findIndex((b) => b.id === bookId);
        if (bookIndex === -1) {
          reject(new Error("Book not found"));
        } else {
          this.books[bookIndex] = {
            ...this.books[bookIndex],
            ...updatedData,
          };
          resolve(true);
        }
      }, 1000);
    });
  }
  
  async deleteBook(bookId: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const bookIndex = this.books.findIndex((b) => b.id === bookId);
        if (bookIndex === -1) {
          reject(new Error("Book not found"));
        } else {
          this.books.splice(bookIndex, 1);
          resolve(true);
        }
      }, 1000);
    });
  }
}
