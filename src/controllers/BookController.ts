import { Request, Response } from "express";
import { BookService } from "../services/BookService";
import { Book } from "../models/Books";
import { ResponseModel } from "../models/ResponseModels";

export class BookController {
  constructor(private bookService: BookService) {}

  async getAllBooks(req: Request, res: Response): Promise<void> {
    try {
      const books = await this.bookService.getAllBooks();
      res.json(new ResponseModel(true, "Books retrieved successfully", books));
    } catch (error) {
      res.status(500).json(new ResponseModel(false, 'An unexpected error occurred', null));
    }
  }

  async addBook(req: Request, res: Response): Promise<void> {
    const { id, title, author } = req.body;
    const book = new Book(id, title, author);

    try {
      await this.bookService.addBook(book);
      res.status(201).json(new ResponseModel(true, "Book added successfully", null));
    } catch (error) {
      res.status(400).json(new ResponseModel(false, 'An unexpected error occurred', null));
    }
  }


  async updateBook(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params; // Extract book ID from the route
      const updatedData = req.body; // Expect updated fields { title, author }
      const success = await this.bookService.updateBook(id, updatedData);
      if (success) {
        res.json(new ResponseModel(true, "Book updated successfully", null));
      } else {
        res.status(404).json(new ResponseModel(false, "Book not found", null));
      }
    } catch (error: any) {
      res.status(404).json(new ResponseModel(false, error.message || "Failed to update book", null));
    }
  }
  

 
}
