const { Router } = require("express");
const Schools = require("../models/").school;
const authMiddleware = require("../auth/middleware");
const router = new Router();

router.get("/", authMiddleware, async (req, res, next) => {
  try {
    const schools = await Schools.findAll();
    res.send(schools);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/:id", authMiddleware, async (req, res, next) => {
  try {
    const { id } = req.params;
    const schoolById = await Schools.findByPk(id);
    res.send(schoolById);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
});

module.exports = router;
