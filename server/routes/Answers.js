import express from "express"

import { postAnswer } from '../controllers/Answers.js'
import auth from '../middleawares/auth.js'

const router = express.Router();

router.patch('/post/:id',auth, postAnswer)
router.patch('/delete/:id',auth, deleteAnswer)

export default router