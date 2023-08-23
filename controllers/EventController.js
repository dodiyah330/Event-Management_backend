const Event = require("../Model/Event");

const createEvent = (req, res) => {
    const event = new Event({
        title: req.body.title,
        start: req.body.start,
        end: req.body.end
    });

    event.save((err, event) => {
        if (err) {
            res.send(err);
        }
        res.json(event);
    });
};

const getEvent = (req, res) => {
    Event.find((err, event) => {
        if (err) {
            res.send(err);
        }
        res.json(event);
    });
};

const updateEvent = (req, res) => {
    Event.findOneAndUpdate(
        { _id: req.params.eventID },
        { 
            $set: {
                title: req.body.title,
                start: req.body.start,
                end: req.body.end
            },
        },
        { new: true },
        (err, Event) => {
            if (err) {
                res.send(err);
            } else res.json(Event);
        }
    );
};

const deleteEvent = (req, res) => {
    Event.deleteOne({ _id: req.params.eventID })
      .then(() => res.json({ message: "Event Deleted" }))
      .catch((err) => res.send(err));
  };
  

module.exports = {
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent
};

