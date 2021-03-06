const express = require('express');
const Song = require('../models/songs');
const auth = require('../parsereqs/check-auth');

const router = express.Router();

//creating a new song
router.post('', auth, (req, res, next) => {
  const song = new Song({
    title: req.body.title,
    artist: req.body.artist,
    header: req.body.header,
    album: req.body.album,
    year: req.body.year,
    zeroByte: req.body.zeroByte,
    comment: req.body.comment,
    track: req.body.track,
    genre: req.body.genre
  });
  song.save().then(result => {
    res.status(201).json({
      message: 'Song added successfully.',
      songId: result._id
    });
  });
});

// fetching all songs in the database
router.get('', (req, res, next) => {
  Song.find().then(documents => {
    console.log(documents);
    res.status(200).json({
      message: 'Song fetched successfully!',
      songs: documents
    });
  });
});

//deleting a single song, specified by its id
router.delete('/:id', auth, (req, res, next) => {
  Song.deleteOne({
    _id: req.params.id
  }).then(result => {
    console.log(result);
    res.status(200).json({
      message: 'Song successfully deleted.'
    });
  });
});

module.exports = router;
