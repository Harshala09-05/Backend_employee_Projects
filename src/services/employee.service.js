
import Employee from '../models/employee.model';

export const createDoc = async (data) => {
  const newEmployee = new Employee(data)
  return await newEmployee.save();
};

export const getAllDoc = async () => {
  return await Employee.find();
};

export const editDoc = async (id,data) => {
  
  return await Employee.findByIdAndUpdate(id, data, { new: true });
 
};

export const updateDoc = async (id, data) => {
  return await Employee.findByIdAndUpdate(id, data, { new: true });
};

export const deleteDoc = async (id) => {
  return await Employee.findByIdAndDelete(id);
};
