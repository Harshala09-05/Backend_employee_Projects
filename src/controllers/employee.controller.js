import HttpStatus from 'http-status-codes';

import * as employeeService from '../services/employee.service';


class EmployeeController {
  static async createDoc(req, res, next) {
    try {
      const data = await employeeService.createDoc(req.body);
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'Employee created successfully'
      });
    } catch (error) {
      next(error);
    }
  }

  static async getAllDoc(req, res, next) {
    try {
      const data = await employeeService.getAllDoc();
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'All employees fetched successfully'
      });
    } catch (error) {
      next(error);
    }
  }

  static async editDoc(req, res, next) {
    try {
      const data = await employeeService.editDoc(req.params.id, req.body);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Employee fetched successfully'
      });
    } catch (error) {
      next(error);
    }
  }

  static async updateDoc(req, res, next) {
    try {
      const data = await employeeService.updateDoc(req.params.id, req.body);
      res.status(HttpStatus.ACCEPTED).json({
        code: HttpStatus.ACCEPTED,
        data: data,
        message: 'Employee updated successfully'
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteDoc(req, res, next) {
    try {
      await employeeService.deleteDoc(req.params.id);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        message: 'Employee deleted successfully'
      });
    } catch (error) {
      next(error);
    }
  }
}

export default EmployeeController;