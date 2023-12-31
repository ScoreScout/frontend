/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const router = express.Router();

router.use(express.json());

module.exports = router;

let tournamentsActiveActivated = true;
let tournamentsArchivedActivated = true;
let tournamentActivated = true;

router.get("/tournaments/active", (req, res) => {
  if (tournamentsActiveActivated) {
    res.status(200).send(require("./tournaments_active.json"));
  } else {
    res.status(500).send();
  }
});

router.get("/tournaments/active/toggle", (req, res) => {
  tournamentsActiveActivated = !tournamentsActiveActivated;
  res.send(tournamentsActiveActivated ? "Activated" : "Deactivated");
});

router.get("/tournaments/archived", (req, res) => {
  if (tournamentsArchivedActivated) {
    res.status(200).send(require("./tournaments_archived.json"));
  } else {
    res.status(500).send();
  }
});

router.get("/tournaments/archived/toggle", (req, res) => {
  tournamentsArchivedActivated = !tournamentsArchivedActivated;
  res.send(tournamentsArchivedActivated ? "Activated" : "Deactivated");
});

router.get("/tournaments/:id", (req, res) => {
  id = req.params.id;
  if (tournamentActivated) {
    if (id === "2") {
      res.status(200).send(require("./tournament-empty.json"));
    } else {
      res.status(200).send(require("./tournament.json"));
    }
  } else {
    res.status(500).send();
  }
});

router.get("/tournaments/:id/toggle", (req, res) => {
  tournamentActivated = !tournamentActivated;
  res.send(tournamentActivated ? "Activated" : "Deactivated");
});

router.post("/tournaments/:id", (req, res) => {
  const data = req.body;

  if (data === undefined) {
    return res.status(400).send("Bad Request: No data provided");
  }

  try {
    res.status(200).send("Data successfully written to file");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});
