import User from "../models/user.model.js";
import UrlModel from "../models/shorturl.model.js";

export const findUserByEmail = async (email) => {
  try {
    return await User.findOne({ email});
  } catch (error) {
    console.error("Error finding user by email:", error);
    throw error;
  }
};

export const findUserByEmailByPassword = async (email) => {
    return await User.findOne({email}).select('+password')
}
export const createUser = async (name, email, password) => {
    const newUser = new User({name, email, password})
    await newUser.save()
    return newUser
}
export const findUserById = async (id) => {
    return await User.findById(id);
}
export const getAllUserUrlsDao = async (id) => {
    return await UrlModel.find({user:id})
}