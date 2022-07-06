const { Router } = require("express");
const ScheduledTrips = require("../models/").scheduledTrip;
const authMiddleware = require("../auth/middleware");
const router = new Router();

router.get("/", authMiddleware, async (req, res, next) => {
  try {
    const scheduledTrips = await ScheduledTrips.findAll();
    console.log("SCHEDULED TRIPS", scheduledTrips);
    res.send(scheduledTrips);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
