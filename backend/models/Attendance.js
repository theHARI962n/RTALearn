import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema(
  {
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
    date: { type: Date, required: true },
    records: [
      {
        studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        present: { type: Boolean, default: false },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Attendance", attendanceSchema);
