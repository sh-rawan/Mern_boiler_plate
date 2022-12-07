const express = require("express");
const router = express.Router();
const userProtect = require("../middleware/authMiddleware");
const { listAll } = require("../controllers/user");

router.get("/getreq", listAll)


module.exports = router;
