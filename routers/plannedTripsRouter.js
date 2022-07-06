const { Router } = require("express");
const PlannedTrips = require("../models/").plannedTrip;
const ScheduledTrips = require("../models/").scheduledTrip;
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

router.get("/:id", authMiddleware, async (req, res, next) => {
  try {
    const { id } = req.params;
    const plannedTripById = await PlannedTrips.findByPk(id);
    res.send(plannedTripById);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
});

router.get("/scheduledtrips", authMiddleware, async (req, res, next) => {
  try {
    const scheduledTrips = await ScheduledTrips.findAll();
    console.log("SCHEDULED TRIPS", scheduledTrips);
    res.send(scheduledTrips);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.patch("/:id/inscription", authMiddleware, async (req, res, next) => {
  try {
    const { id } = req.params;
    const { numberOfKids } = req.body;
    console.log("REQUEST PARAMS ID", id);
    const plannedTrip = await PlannedTrips.findByPk(id);
    if (!id) {
      return res.status(404).send("Planned trip not found");
    }
    if (numberOfKids > plannedTrip.capacity) {
      return res
        .status(404)
        .send(`There's only ${plannedTrip.capacity} spots left`);
    }

    await PlannedTrips.update(
      { capacity: plannedTrip.capacity - numberOfKids },
      { where: { id: plannedTrip.id } }
    );
    const test = await ScheduledTrips.create({
      numberOfKids: numberOfKids,
      plannedTripId: id,
      userId: req.user.id,
    });
    console.log("TEST", test);
    res.send({ message: `${numberOfKids} spot(s) booked`, id });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
