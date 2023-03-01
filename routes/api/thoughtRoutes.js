// const router = require('express').Router();

const router = require('express').Router();
const {
    getAllThoughts,
    createThought,
    updateThought,
    getThoughtById,
    deleteThought,
    addReaction,
    deleteReaction,

} = require('../../controllers/thoughtController')

router.route('/').get(getAllThoughts).post(createThought);
router.route('/:id').get(createThought).put(updateThought).delete(deleteThought)
router.route('/:thoughtsId/reactions/:reactionId').delete(deleteReaction);
router.route('/:thoughtsId/reactions').post(addReaction);

// router.route('/')
//     .get(getAllThoughts)
//     .post(createThought)
//     .put(updateThought)
//     .delete(deleteThought);

    module.exports = router
