import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

// MongoDB Connection 
mongoose
  .connect("mongodb://127.0.0.1:27017/day28demo")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log(err));

//  User Schema 
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user" },
});

// Hash password 
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = mongoose.model("User", userSchema);

// Middleware 
const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) return res.status(401).json({ msg: "No token, access denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret123");
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ msg: "Invalid token" });
  }
};

const roleMiddleware = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ msg: "Access denied: insufficient role" });
    }
    next();
  };
};

// Signup
app.post("/signup", async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const user = new User({ username, password, role });
    await user.save();
    res.json({ msg: "User registered successfully" });
  } catch (err) {
    res.status(400).json({ msg: "Error registering user", error: err.message });
  }
});

// Login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) return res.status(400).json({ msg: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET || "secret123",
    { expiresIn: "1h" }
  );

  res.json({ msg: "Login successful", token });
});

// Protected route 
app.get("/protected", authMiddleware, (req, res) => {
  res.json({ msg: `Hello ${req.user.role}, you accessed a protected route!` });
});

// Admin
app.get("/admin", authMiddleware, roleMiddleware(["admin"]), (req, res) => {
  res.json({ msg: "Welcome Admin, you have special access!" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on :${PORT}`));
