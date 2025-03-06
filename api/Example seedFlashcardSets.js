import mongoose from "mongoose";
import FlashcardSet from "./models/FlashcardSet.js"; // Assuming the model is in the models folder
import dotenv from "dotenv";

// Load environment variables from .env
dotenv.config();

const flashcardSetsData = [
  {
    title: "English-Spanish Vocabulary",
    description: "A set of flashcards for basic English-Spanish vocabulary.",
    userId: "60f76b99b8a25c8f9ca9f402", // Replace with an existing user ID
    flashcards: [
      {
        front: "Apple",
        back: "Manzana",
        audioUrl: "/assets/audio/apple.mp3",
      },
      {
        front: "Book",
        back: "Libro",
      },
      {
        front: "House",
        back: "Casa",
      },
    ],
  },
  {
    title: "Spanish Numbers",
    description: "A set of flashcards for learning Spanish numbers.",
    userId: "60f76b99b8a25c8f9ca9f403", // Replace with an existing user ID
    flashcards: [
      {
        front: "One",
        back: "Uno",
      },
      {
        front: "Two",
        back: "Dos",
      },
      {
        front: "Three",
        back: "Tres",
        audioUrl: "/assets/audio/three.mp3",
      },
    ],
  },
];

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.log(err);
    process.exit(1); // Exit on error
  }
};

const seedDatabase = async () => {
  try {
    await FlashcardSet.deleteMany(); // Clear the collection before seeding
    const flashcardSets = await FlashcardSet.insertMany(flashcardSetsData); // Insert flashcard sets
    console.log(`${flashcardSets.length} flashcard sets have been added.`);
    mongoose.connection.close(); // Close the connection after seeding
  } catch (err) {
    console.log(err);
    process.exit(1); // Exit on error
  }
};

// Connect to DB and seed the database
const runSeeder = async () => {
  await connectDB();
  await seedDatabase();
};

runSeeder();
