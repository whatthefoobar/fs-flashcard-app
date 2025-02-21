import FlashcardSet from "../models/FlashcardSet.js";

// Create flashcard set
export const createFlashcardSet = async (req, res) => {
  const { title, description, flashcards } = req.body;

  try {
    const newSet = await FlashcardSet.create({
      title,
      description,
      flashcards,
      userId: req.user.id, // Get userId from the token
    });

    res.status(201).json(newSet);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get flashcard sets
export const getFlashcardSets = async (req, res) => {
  try {
    const sets = await FlashcardSet.find({ userId: req.user.id });
    res.status(200).json(sets);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
