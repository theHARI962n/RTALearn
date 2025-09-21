import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    code: { type: String, unique: true, required: true }, // unique join code
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    videos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Video" }]
  },
  { timestamps: true }
);

export default mongoose.model("Course", courseSchema);
