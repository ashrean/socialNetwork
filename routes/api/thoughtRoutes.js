// const router = require('express').Router();

const router = require('express').Router();
const {
    getAllThoughts,
    createThought,
    updateThought,
    getThoughtById,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughtController')

router.route('/').get(getAllThoughts).post(createThought);

router.route('/')
    .get(getAllThoughts)
    .post(createThought)
    .put(updateThought);


// router.route('/:thoughtsId/reactions/:reactionId').delete(deleteReactions);
// router.route('/:thoughtsId/reactions').post(addReaction);
    module.exports = router
