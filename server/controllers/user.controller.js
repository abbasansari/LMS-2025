import { userModel } from "../models/userModel.js";
import { generateToken } from "../utils/generateTokeken.js";
import bcrypt from "bcryptjs";

//RegisterController

export const registerController = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Validate input fields
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill in all fields" });
    }

    // Check if the user already exists
    const userExist = await userModel.findOne({ email });
    if (userExist) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const user = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    // Remove the password from the response for security
    const userResponse = {
      id: user._id,
      name: user.name,
      email: user.email,
    };

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: userResponse,
    });
  } catch (error) {
    console.error("Error in registerController:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to register. Please try again later.",
    });
  }
};

//LoginController

export const loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill in all fields" });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }
    console.log(user);

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }

    // Generate JWT
    const token = generateToken(user);

    // Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    // Send response
    res.status(200).json({
      success: true,
      message: `Welcome back ${user.name}`,
      data: user,
    });
  } catch (error) {
    console.error("Login error:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to login, please try again" });
  }
};

// export const loginController = async (req, res) => {
//   const { email, password } = req.body;
//   console.log(req.body);

//   try {
//     if (!email || !password) {
//       return res
//         .status(400)
//         .json({ success: false, message: "Please fill in all fields" });
//     }
//     const user = await userModel.findOne({ email });
//     if (!user) {
//       return res
//         .status(400)
//         .json({ success: false, message: "Invalid credentials" });
//     }
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res
//         .status(400)
//         .json({ success: false, message: "Invalid credentials" });
//     }
//     // const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
//     console.log("im here");

//     generateToken(user, res, `Welcome back ${user.name}`);

//     res.status(200).json({ success: true, data: user, token: token });
//   } catch (error) {
//     return res
//       .status(400)
//       .json({ success: false, message: "Failed to login please tryagin" });
//   }
// };
