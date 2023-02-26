const { Thought, User } = require('../models');
const { populate } = require('../models/User');

const thoughtController = {
    // get all thoughts of a user
    getAllThoughts(req, res) {
        Thought.find().then((thought) =>
        res.json(thought)).catch((error) =>
        res.status(500).json(err));
    }
},

// create a thought to a user
createThought(req, res) {
    Thought.create(req.body)
    .then((data) =>{
        return User.findOneAndUpdate(
            {_id:req.bosy.userID},
            {$push:{ thoughts:dbThoughtData._id}},
            {new:true}

        )
    })
    .then(userData => res.json(userData)).catch((error) => res.status(500).json(err));
},

// update a user
updateThought(req, req){
    Thought.findOneAndUpdate({
        _id: req.params.id
    },
    {$set:req.body},
    {runValidators: true, new:true}
    )
    .then((thought) => {
        !thought ? res.status(404).json({ message: 'No thought by ID'}) : res.json(thought);
    }) .catch((error) => res.status(500).json);
}
