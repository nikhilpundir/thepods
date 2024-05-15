import express from 'express';
import { getAllUsers } from '../controllers/reportController.js';

const router = express.Router();

router.route('/allUsers').get(getAllUsers);

export default router;