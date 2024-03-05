import {Router} from 'express';
import { signup } from '../controllers/authController.js';
const authRoute  = Router();

// Signup
// Path : http://localhost:4040/api/signup
authRoute.post('/signup', signup);


export default authRoute;
