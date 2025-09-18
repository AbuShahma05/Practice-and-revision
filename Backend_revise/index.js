import express from "express";
const app = express();
const port = 3000;

app.use(express.json()); // to parse json body

/* 

 app.use is for middleware.
 Middleware is a function that runs before your actual route handler.

(req, res, next) 

This is the middleware function.

It gets 3 arguments:

req → incoming request (info about URL, method, body, headers, etc.)

res → response (to send something back)

next → a function to pass control to the next middleware or route

*/

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Read data (like viewing a page or fetching data)");
});

app.get("/home", (req, res) => {
  res.send("This is home page");
});

app.get("/example/a", (req, res) => {
  res.send("Hello from A!");
});

app.post("/post", (req, res) => {
  res.send("Create new data (like signing up, posting a form)");
});

app.delete("/delete", (req, res) => {
  res.send("Remove data");
});

app.put("/put", (req, res) => {
  res.send("Update existing data completely (replace the old with the new)");
});

app.patch("/patch", (req, res) => {
  res.send("Update partially (only change some fields, not all)");
});

app.listen(port, () => {
  console.log(`app is listening on port:${port}`);
});
