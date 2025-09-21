import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
    message: { type: String, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // admin
    recipients: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // optional for targeting specific students
    readBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // who already read it
  },
  { timestamps: true }
);

export default mongoose.model("Notification", notificationSchema);
