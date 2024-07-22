import express from 'express';
import  EmployeeController from '../controllers/employee.controller';
import { newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();
router.get('/', EmployeeController.getAllDoc);
router.post('/', EmployeeController.createDoc);
router.post('/edit/:id', EmployeeController.editDoc);
router.post('/update/:id', EmployeeController.updateDoc);
router.post('/delete/:id', EmployeeController.deleteDoc);




export default router;
