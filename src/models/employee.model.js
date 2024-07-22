
import { Schema, model } from 'mongoose';

const employeeSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    Profile_image: { type: Buffer,required: false},
    gender: { type:String,required: true},
    Department:{ type:String,required: true},
    salary:{type:String,required: true},
    start_date:{type:String,required: true},
    Notes:{type:String,required: true}
  }
);

export default model('employee', employeeSchema);
