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

router.get("/myscheduledtrips", authMiddleware, async (req, res, next) => {
  try {
    const userId = req.user.dataValues.id;
    console.log("USER ID", userId);

    const scheduledTripsByUser = await ScheduledTrips.findAll({
      where: {
        userId: userId,
      },
    });
    res.send(scheduledTripsByUser);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
