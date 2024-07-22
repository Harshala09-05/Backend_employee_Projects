import express from 'express';
import * as userController from '../controllers/user.controller';
import * as userValidator from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();



//route to create a new user
router.post('/register',  userController.newUser);


//for login
router.post('/login', userValidator.getAllUsers, userController.getAllUsers);



export default router;
