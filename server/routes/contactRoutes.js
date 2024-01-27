import express from 'express';
import {
  sendContact
} from '../controllers/contactController.js';

const router = express.Router();

router.route('/send').post(sendContact);

export default router;