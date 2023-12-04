const router = require("express").Router();

module.exports = router;

let tournamentsActiveActivated = true;
let tournamentsArchivedActivated = true;
let tournamentActivated = true;

router.get('/tournaments/active', (req, res) => {
    if (tournamentsActiveActivated) {
        res.status(200).send(require('./tournaments_active.json'))
    } else {
        res.status(500).send()
    }
})

router.get('/tournaments/active/toggle', (req, res) => {
    tournamentsActiveActivated = !tournamentsActiveActivated
    res.send(tournamentsActiveActivated ? 'Activated' : 'Deactivated')
})

router.get('/tournaments/archived', (req, res) => {
    if (tournamentsArchivedActivated) {
        res.status(200).send(require('./tournaments_archived.json'))
    } else {
        res.status(500).send()
    }
})

router.get('/tournaments/archived/toggle', (req, res) => {
    tournamentsArchivedActivated = !tournamentsArchivedActivated
    res.send(tournamentsArchivedActivated ? 'Activated' : 'Deactivated')
})

router.get('/tournaments/:id', (req, res) => {
    if (tournamentsActiveActivated) {
        res.status(200).send(require('./tournament.json'))
    } else {
        res.status(500).send()
    }
})

router.get('/tournaments/:id/toggle', (req, res) => {
    tournamentActivated = !tournamentActivated
    res.send(tournamentActivated ? 'Activated' : 'Deactivated')
})