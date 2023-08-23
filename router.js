const router = require("express").Router();
const { getEvent, createEvent, updateEvent, deleteEvent } = require("./controllers/EventController");

router.post("/event", createEvent);
router.get("/events", getEvent);
router.put("/events/:eventID", updateEvent);
router.delete("/events/:eventID", deleteEvent);

module.exports = router;