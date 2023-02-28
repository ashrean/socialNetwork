const router = require('express').Router();
const {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    getUserById,
    removeFriend
} = require('../../controllers/userController')

router.route('/').get(getAllUsers).post(createUser);

router.route('/:id').get(getUsersById).put(updateUsers).delete(deleteUsers);

router.route('/:id').get(getUsersById).put(updateUsers).delete(deleteUsers);

module.exports = router; 
