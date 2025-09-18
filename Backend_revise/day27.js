import mongoose from 'mongoose'

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/day27db")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Connection error:", err));


// Mongoose Schemas & Models

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: { type: String, unique: true },
});

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Relation
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

/* ------------------------------------------------------
   3. CRUD Operations with Mongoose
------------------------------------------------------ */
async function crudExamples() {
  // CREATE
  const user = await User.create({ name: "Alice", age: 23, email: "alice@example.com" });
  console.log("User Created:", user);

  // READ (find)
  const users = await User.find();
  console.log("All Users:", users);

  const singleUser = await User.findOne({ name: "Alice" });
  console.log("Single User:", singleUser);

  // UPDATE
  const updatedUser = await User.findOneAndUpdate(
    { name: "Alice" },
    { age: 24 },
    { new: true }
  );
  console.log("Updated User:", updatedUser);

  // DELETE
  const deletedUser = await User.deleteOne({ name: "Alice" });
  console.log("Deleted User:", deletedUser);
}


//   Relations (ref & populate)
//    - One User can write multiple Posts

async function relationExample() {
  // Create a user
  const user = await User.create({ name: "Bob", age: 30, email: "bob@example.com" });

  // Create a post with reference to user
  const post = await Post.create({
    title: "My First Post",
    content: "This is the content of the post",
    author: user._id,
  });

  console.log("Post Created:", post);

  // Populate (replace author id with actual user details)
  const populatedPost = await Post.findOne({ _id: post._id }).populate("author");
  console.log("Populated Post:", populatedPost);
}