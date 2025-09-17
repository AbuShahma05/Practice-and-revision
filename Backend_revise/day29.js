import express from "express";
import dotenv from "dotenv";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import Joi from "joi";
import { body, validationResult } from "express-validator";

// Load env variables
dotenv.config();

const app = express();
app.use(express.json());

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer setup (store file in memory before uploading)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Middleware to handle express-validator errors
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
};

// Joi schema for user
const userSchema = Joi.object({
  name: Joi.string().min(3).required(),
  age: Joi.number().min(18).required(),
});

// Example dataset for pagination, search, filter
const items = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`,
  category: i % 2 === 0 ? "A" : "B",
}));

// Route: Validation using Joi
app.post("/joi-validation", (req, res) => {
  const { error, value } = userSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  res.json({ message: "Valid data with Joi", data: value });
});

// Route: Validation using express-validator
app.post(
  "/express-validator",
  [
    body("email").isEmail().withMessage("Valid email required"),
    body("password").isLength({ min: 6 }).withMessage("Password min 6 chars"),
  ],
  validate,
  (req, res) => {
    res.json({ message: "Valid data with express-validator", data: req.body });
  }
);

// Route: File upload with multer + cloudinary
app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload_stream(
      { folder: "day29" },
      (error, result) => {
        if (error) return res.status(500).json({ error });
        res.json({ message: "File uploaded", url: result.secure_url });
      }
    );
    result.end(req.file.buffer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route: Pagination, search, filtering
app.get("/items", (req, res) => {
  let { page = 1, limit = 5, search = "", category } = req.query;
  page = parseInt(page);
  limit = parseInt(limit);

  let data = items;

  if (search) {
    data = data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
  }

  if (category) {
    data = data.filter((item) => item.category === category);
  }

  const start = (page - 1) * limit;
  const end = page * limit;
  const paginatedData = data.slice(start, end);

  res.json({
    total: data.length,
    page,
    limit,
    results: paginatedData,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
