"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const BookController_1 = require("./controllers/BookController");
const BookService_1 = require("./services/BookService");
const ResponseModels_1 = require("./models/ResponseModels");
const app = (0, express_1.default)();
const port = 3000;
// Middleware
app.use(body_parser_1.default.json());
// Instantiate services and controllers
const bookService = new BookService_1.BookService();
const bookController = new BookController_1.BookController(bookService);
// Routes
app.get('/books', (req, res) => {
    bookController.getAllBooks(req, res);
});
app.post('/books', (req, res) => {
    bookController.addBook(req, res);
});
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json(new ResponseModels_1.ResponseModel(false, 'Internal Server Error', null));
});
// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
exports.default = app;
