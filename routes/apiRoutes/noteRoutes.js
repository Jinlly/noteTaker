const router = require('express').Router();
const notes = require('../../db/db');

//const for create & delete
const {
    createNewNote,
    deleteNote
} = require('../../lib/noteFunction');

//router get post and delete under /notes address
router.get('/notes', (req, res) => {
    let saved = notes;
    res.json(saved);
})

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let note = createNewNote(req.body, notes);
    res.json(note);
})

router.delete('/notes/:id', (req, res) => {
    deleteNote(notes, req.params.id);
    res.json(notes);
})

module.exports = router;