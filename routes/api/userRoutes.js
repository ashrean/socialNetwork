const router = require('express').Router();
const {
    getAllUser,
    createUser,
    updateUser,
    deleteUser,
    getUserById,
    addFriend,
    removeFriend
} = require('../../controllers/userController')

router.route('/').get(getAllUser).post(createUser);

router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

router.route("/:id/friends/:friendId").post(addFriend).delete(removeFriend);
module.exports = router;
