const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// GET all tags
router.get('/', (req, res) => {
    Tag.findAll({
        include: [ 
            {
            model: Product,
            through: ProductTag,
            },
        ],
    })
    .then((tags) => res.status(200).json(tags))
    .catch((err) => res.status(500).json(err));
});

// GET tag by id
router.get('/:id', (req,res) => {
    Tag.findOne({
        where: {
            id: req.params.id,
        },
        include: [
            {
                model: Product,
                through: ProductTag,
            },
        ],
    })
    .then((tag) => res.status(200).json(tag))
    .catch((err) => res.status(404).json(err));
});

// POST a new tag
router.post('/', (req,res) => {
    Tag.create(req.body)
    .then((tag) => res.status(200).json(tag))
    .catch((err) => res.status(404).json(err));
});

// PUT a tag by id
router.put('/:id', (req, res) => {
    Tag.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
    .then((tag) => res.status(200).json(tag))
    .catch((err) => res.status(404).json(err));
});

// DELETE tag by id
router.delete('/:id', (req, res) => {
    Tag.destroy({
        where: {
            id: req.params.id,
        },
    })
    .then((tag) => res.status(200).json(tag))
    .catch((err) => res.status(404).json(err));
});

module.exports = router;