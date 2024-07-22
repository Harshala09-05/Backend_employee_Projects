import User from '../models/user.model';


//get all users
export const getAllUsers = async (email, password) => {
  try {
    const data = await User.findOne({ email });
    if (!data) {
      return { success: false, message: "Invalid mail" };
    }
    const isPasswordValid = await User.findOne({ password});
    if (!isPasswordValid) {
      
      return { success: false, message: "Invalid password" };
    }
    return { success: true, message: "login successfully" };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
 


//create new user
export const newUser = async (firstName,lastName,email,password) => {
  let result =await User.findOne({ email: email })
  
  if (result === null) {
    const data = await User.create({ firstName, lastName, email, password });
  
    return data;
  }
  else {
    throw new Error("User already exist");
  }
  
  
};

