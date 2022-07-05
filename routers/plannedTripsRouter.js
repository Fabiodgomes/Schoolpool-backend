const { Router } = require("express");
const PlannedTrips = require("../models/").plannedTrip;
const authMiddleware = require("../auth/middleware");
const router = new Router();

router.get("/", authMiddleware, async (req, res, next) => {
  try {
    const plannedTrips = await PlannedTrips.findAll();
    res.send(plannedTrips);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
