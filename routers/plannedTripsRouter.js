const { Router } = require("express");
const PlannedTrips = require("../models/").plannedTrip;
const ScheduledTrips = require("../models/").scheduledTrip;
const Schools = require("../models/").school;
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

router.patch("/:id/inscription", authMiddleware, async (req, res, next) => {
  try {
    const { id } = req.params;
    const { numberOfKids, latitude, longitude } = req.body;
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
    if (!latitude || !longitude) {
      return res.status(404).send("please provide a pick up point");
    }
    if (numberOfKids <= 0) {
      return res.status(404).send(`You have to book at least 1 place`);
    }

    await PlannedTrips.update(
      { capacity: plannedTrip.capacity - numberOfKids },
      { where: { id: plannedTrip.id } }
    );
    await ScheduledTrips.create({
      numberOfKids: numberOfKids,
      latitude: latitude,
      longitude: longitude,
      plannedTripId: id,
      userId: req.user.id,
    });
    res.send({ message: `${numberOfKids} spot(s) booked`, id });
  } catch (error) {
    next(error);
  }
});

router.post("/newplannedtrip", authMiddleware, async (req, res, next) => {
  try {
    const {
      date,
      time,
      capacity,
      latitude,
      longitude,
      schoolId,
      transportationTypeId,
    } = req.body;
    const id = req.user.dataValues.id;
    console.log("req.user", req.user);
    if (!date || !time || !capacity || !latitude || !longitude || !schoolId) {
      return res
        .status(400)
        .send(
          "Please provide a date, time, capacity, latitude, longitude and schoolId"
        );
    }
    const newPlannedTrip = await PlannedTrips.create({
      date,
      time,
      capacity,
      latitude,
      longitude,
      schoolId,
      transportationTypeId,
      userId: id,
    });

    return res.status(200).send({ newPlannedTrip });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/myplannedtrips", authMiddleware, async (req, res, next) => {
  try {
    const userId = req.user.dataValues.id;
    console.log("USER ID", userId);

    const plannedTripsByUser = await PlannedTrips.findAll({
      where: {
        userId: userId,
      },
    });
    res.send(plannedTripsByUser);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/plannedtripsincluding", authMiddleware, async (req, res, next) => {
  try {
    const plannedTrips = await PlannedTrips.findAll({
      include: Schools,
    });
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

module.exports = router;
