import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./routes/User.js";
import FoodRoutes from "./routes/Food.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true })); // for form data

app.use("/api/user/", UserRoutes);
app.use("/api/food/", FoodRoutes);

// error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello developers from GFG",
  });
});

const connectDB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to Mongo DB"))
    .catch((err) => {
      console.error("failed to connect with mongo");
      console.error(err);
    });
};

const startServer = async () => {
  try {
    connectDB();
    app.listen(8080, () => console.log("Server started on port 8080"));
  } catch (error) {
    console.log(error);
  }
};

startServer();
// import express from "express";
// import * as dotenv from "dotenv";
// import cors from "cors";
// import mongoose from "mongoose";
// import UserRoutes from "./routes/User.js";
// import FoodRoutes from "./routes/Food.js";

// // Load environment variables from .env
// dotenv.config();

// const app = express();

// // Middleware setup
// app.use(cors());
// app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({ extended: true })); // For form data

// // Routes
// app.use("/api/user/", UserRoutes);
// app.use("/api/food/", FoodRoutes);

// // Default route
// app.get("/", (req, res) => {
//   res.status(200).json({
//     message: "Hello developers from GFG",
//   });
// });

// // Error handler middleware
// app.use((err, req, res, next) => {
//   const status = err.status || 500;
//   const message = err.message || "Something went wrong";
//   console.error(err); // Log detailed error
//   res.status(status).json({
//     success: false,
//     status,
//     message,
//   });
// });

// // Connect to MongoDB
// const connectDB = async () => {
//   mongoose.set("strictQuery", true); // Enable strict query mode
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to MongoDB successfully.");
//   } catch (error) {
//     console.error("Failed to connect to MongoDB.");
//     console.error(error.message);
//   }
// };

// // Start the server
// const startServer = async () => {
//   try {
//     await connectDB();
//     const PORT = process.env.PORT || 8080;
//     app.listen(PORT, () => {
//       console.log(`Server started on port ${PORT}`);
//     });
//   } catch (error) {
//     console.error("Server failed to start.");
//     console.error(error.message);
//   }
// };

// // Initialize server
// startServer();

