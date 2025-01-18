import { Router } from 'express';
import { BookController } from '../controllers/BookController';
import { BookService } from '../services/BookService';

const router = Router();

// Instantiate services and controllers
const bookService = new BookService();
const bookController = new BookController(bookService);

// Define routes
router.get('/', (req, res) => bookController.getAllBooks(req, res));
router.post('/', (req, res) => bookController.addBook(req, res));
router.put("/:id", (req, res) => bookController.updateBook(req, res));
// router.delete("/:id", (req, res) => bookController.deleteBook(req, res));

export default router;
