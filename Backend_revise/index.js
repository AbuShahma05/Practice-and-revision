const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); // to parse json body

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello jii");
});

app.get("/home", (req, res) => {
  res.send("This is home page");
});

app.get("/example/a", (req, res) => {
  res.send("Hello from A!");
});

app.post("/post", (req, res) => {
  res.send("got a post request");
});

app.delete("/delete", (req, res) => {
  res.send("delete ho gya bhaiya");
});

app.put("/put", (req, res) => {
  res.send("mujhe nhi pata put kya hai bhai");
});

app.patch("/patch", (req, res) => {
  res.send("patch bhi mujhe nhi pata");
});

app.listen(port, () => {
  console.log(`app is listening on port:${port}`);
});
