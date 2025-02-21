import mongoose from "mongoose";

const flashcardSetSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  flashcards: [
    {
      front: { type: String, required: true },
      back: { type: String, required: true },
      audioUrl: { type: String },
    },
  ],
});

export default mongoose.model("FlashcardSet", flashcardSetSchema);
