import express from 'express'
import { getAllPerfumes, perfumeByID } from "../controllers/perfumes.mjs";
const router = express.Router()

router.get('/', getAllPerfumes)
router.get('/:_id', perfumeByID)

export default router