const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// GET all tags
router.get('/', (req, res) => {
    Tag.findAll()
});

// GET tag by id
router.get('/:id', (req,res) => {
    Tag.findOne()
});

// POST a new tag
router.post('/', (req,res) => {
    Tag.create()
});

// PUT a tag by id
router.put('/:id', (req, res) => {
    Tag.update()
});

// DELETE tag by id
router.delete('/:id', (req, res) => {
    Tag.destroy()
});


module.exports = router;