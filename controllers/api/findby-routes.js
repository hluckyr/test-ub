
const router = require('express').Router();
const { Listing } = require('../../models');

// Find all records by genre localhost:3001/api/search/genre
router.get('/genre/:genre', (req, res) => {
    Listing.findAll({ where: { genre: req.params.genre } }).then((listingData) => {
        res.json(listingData);
    });
});

// Find a single listing by its primary key (user_id) localhost:3001/api/search/id
router.get('/id/:id', (req, res) => {
    Listing.findByPk(req.params.id).then((listingData) => {
        res.json(listingData);
    });
});

// Find a single listing by its title localhost:3001/api/search/title
router.get('/title/:title', (req, res) => {
    Listing.findOne({ where: { title: req.params.title } }).then((listingData) => {
        res.json(listingData);
    });
});

// Find a single listing by its artist localhost:3001/api/search/artist
router.get('/artist/:artist', (req, res) => {
    Listing.findOne({ where: { artist: req.params.artist } }).then((listingData) => {
        res.json(listingData);
    });
});

// Find all listings by condition localhost:3001/api/search/condition
router.get('/condition/:condition', (req, res) => {
    Listing.findAll({ where: { condition: req.params.condition } }).then((listingData) => {
        res.json(listingData);
    });
});

// Find all records by seller localhost:3001/api/search/seller
router.get('/seller/:seller', (req, res) => {
    Listing.findAll({ where: { seller: req.params.seller } }).then((listingData) => {
        res.json(listingData);
    });
});
