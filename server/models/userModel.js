import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: "student",
      enum: ["student", "instructor", "admin"],
    },
    enrollerCourses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Courses",
      },
    ],
    photoURL: {
      type: String,
      default: "https://www.gravatar.com/avatar/000?d=mp",
    },
  },
  { timestamps: true }
);

export const userModel = mongoose.model("User", userSchema);
