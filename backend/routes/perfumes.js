const express = require("express");
const { getAllPerfumes, perfumeByID } = require("../controllers/perfumes.js");
const authenticateToken = require("../middleware/auth.js");
const router = express.Router();

router.get("/", authenticateToken, getAllPerfumes);
router.get("/:_id", perfumeByID);

module.exports = router;
