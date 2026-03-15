import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { sendEmail } from "../services/mail.service.js";

export async function register(req, res) {
  const { username, email, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (isUserAlreadyExists) {
    return res.status(400).json({
      message: "Username or email already exists",
      success: false,
      err: "User already exists",
    });
  }

  const user = await userModel.create({ username, email, password });

  const emailVerificationToken = jwt.sign({
    email:user.email,

  },process.env.JWT_SECRET)

  await sendEmail({
    to: email,
    subject: "Welcome to Perplexity!",
    html: `
    
            <p>Hello <strong>${username}</strong>,</p>
            <p> Welcome to our <strong> Perplexity</strong> app! We're glad to have you on board.</p>
            <p>To get started, please verify your email address by clicking the link below:</p>
            <a href="http:localhost:3000/api/auth/verify-email?token=${emailVerificationToken}">Verify Email</a>
            <p>If you didn't create an account, please ignore this email.</p>
            <p>Best regards,<br/> The Perplexity Team</p>`
  });


  res.status(201).json({
    message: "User registered successfully",
    success: true,
    user:{
      id: user._id,
      username: user.username,
      email: user.email,
    }
  });
}
