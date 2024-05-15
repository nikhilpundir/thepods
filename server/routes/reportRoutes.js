import express from 'express';
import { getAllUser } from '../controllers/reportController.js';

const router = express.Router();

router.route('/allUsers').get(getAllUser);

export default router;