import express from 'express'
import morgan from 'morgan'
import cors from cors

const app = express();
const port = 3000;

// Middleware
app.use(express.json()); // parse JSON body
app.use(morgan("dev")); // third-party middleware
app.use(cors()); // allow cross-origin requests

// Custom middleware for logging time
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// In-memory data store 
let todos = [];
let idCounter = 1;

// Routes

// Get all
app.get("/todos", (req, res) => {
  res.json(todos);
});

// Get 
app.get("/todos/:id", (req, res, next) => {
  const todo = todos.find((t) => t.id === parseInt(req.params.id));
  if (!todo) {
    const err = new Error("Todo not found");
    err.status = 404;
    return next(err);
  }
  res.json(todo);
});

// Create
app.post("/todos", (req, res, next) => {
  const { title } = req.body;
  if (!title) {
    const err = new Error("Title is required");
    err.status = 400;
    return next(err);
  }
  const newTodo = { id: idCounter++, title, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update 
app.put("/todos/:id", (req, res, next) => {
  const { title, completed } = req.body;
  const todo = todos.find((t) => t.id === parseInt(req.params.id));
  if (!todo) {
    const err = new Error("Todo not found");
    err.status = 404;
    return next(err);
  }
  if (typeof title !== "string" || typeof completed !== "boolean") {
    const err = new Error("Invalid input");
    err.status = 400;
    return next(err);
  }
  todo.title = title;
  todo.completed = completed;
  res.json(todo);
});

// Update 
app.patch("/todos/:id", (req, res, next) => {
  const todo = todos.find((t) => t.id === parseInt(req.params.id));
  if (!todo) {
    const err = new Error("Todo not found");
    err.status = 404;
    return next(err);
  }
  const { title, completed } = req.body;
  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;
  res.json(todo);
});

// Delete 
app.delete("/todos/:id", (req, res, next) => {
  const index = todos.findIndex((t) => t.id === parseInt(req.params.id));
  if (index === -1) {
    const err = new Error("Todo not found");
    err.status = 404;
    return next(err);
  }
  const deleted = todos.splice(index, 1);
  res.json({ message: "Todo deleted", todo: deleted[0] });
});

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error",
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
