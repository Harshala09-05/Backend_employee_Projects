import { Schema, model } from 'mongoose';


const userSchema = new Schema(
  {
    firstName: {
      type: String,
      require: true,
      
    
    },
  
    lastName: {
      type: String,
      require: true,
     
    
    },
  
    email: {
      type: String,
      require: true,
      unique: true
    
    },
  
    password: {
      type: String,
      require: true,
      unique: true
  
    },
  },
  {
    timestamps: true
  });
  

export default model('User', userSchema);

