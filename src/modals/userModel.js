import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  fname: { type: String, required: true, lowercase: true, trim: true },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: { type: String, required: true },
  role: {
    type: String,
    required: true,
    enum: {
      values: ["customer", "shopkeeper"],
      message: "role can be customer or shopkeeper only",
    },
  },
});

userSchema.pre("save", async function save(next) {
  if (!this.isModified("password")) return next();
  try {
    const HASH_ROUNDS = parseInt(process.env.HASH_ROUNDS);
    const salt = await bcrypt.genSalt(HASH_ROUNDS);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.validatePassword = async function (data) {
  const validatePassword = await bcrypt.compare(data, this.password);
  if (!validatePassword) throw new Error("Password is not valid");
};

const userModel = mongoose.models.users || mongoose.model("users", userSchema);

export default userModel;
