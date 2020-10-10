const { Router } = require("express");

const getProfile = require("../controllers/profileController");

const router = Router();

router.get("/", getProfile);

module.exports = router;
