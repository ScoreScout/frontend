const router = require("express").Router();
const fs = require("fs");

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
  if (tournamentsActiveActivated) {
    res.status(200).send(require("./tournament.json"));
  } else {
    res.status(500).send();
  }
});

router.get("/tournaments/:id/toggle", (req, res) => {
  tournamentActivated = !tournamentActivated;
  res.send(tournamentActivated ? "Activated" : "Deactivated");
});

const writeTournamentsActive = (data) => {
  fs.writeFileSync("./stubs/api/tournaments_active.json", JSON.stringify(data, null, 2));
};

router.post("/tournaments/active", (req, res) => {
  const newTournament = req.body;
  if (newTournament) {
    // Assuming the tournament object has necessary properties like title, date, etc.
    // You may need to adjust this based on your actual data structure
    const createdTournament = {
      title: newTournament.title,
      date: new Date().toLocaleDateString(),
      amountPlayers: newTournament.amountPlayers,
      amountGamesPlayed: 0,
      status: "Created", // You can set the initial status as needed
    };
    const tournaments = require("./tournaments_active.json");
    tournaments.data.push(createdTournament);
    writeTournamentsActive(tournaments);

    res.status(201).send({ ok: true, data: createdTournament });
  } else {
    res.status(400).send({ ok: false, error: "Invalid tournament data" });
  }
});
