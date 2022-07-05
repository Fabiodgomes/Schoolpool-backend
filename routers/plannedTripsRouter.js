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

router.patch("/:id/inscription", async (req, res, next) => {
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

    res.send({ message: `${numberOfKids} spots booked` });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
