// const { response } = require('express');
// put back User
const { Thought, User} = require('../models');
// const { populate } = require('../models/User');

module.exports = {
    // get all thoughts of a user
    getAllThoughts(req, res) {
        Thought.find().then((thought) =>
        res.json(thought)).catch((err) =>
        res.status(500).json(err));
    },


// create a thought to a user
createThought({body}, res) {
    Thought.create(body)
    .then((data) =>{
         User.findOneAndUpdate(
            {_id:body.userID},
            {$push:{ thoughts:data._id}},
            {new:true}

        )
    })
    .then(userData => res.json(userData)).catch((err) => res.status(500).json(err));
},

// update a thought
updateThought(req, res){
    Thought.findOneAndUpdate({
        _id: req.params.id
    },
    {$set:req.body},
    {runValidators: true, new:true}
    )
    .then((thought) => {
        !thought ? res.status(404).json({ message: 'No thoughts by ID'}) : res.json(thought);
    }) .catch((error) => res.status(500).json);
},

// //get Thoughts by ID
getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.id })
      .then((data) => {
        // if no thought is found
        if (!data) {
          res.status(404).json({ message: "No thought with this ID" });
          return;
        }
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  deleteThought(req, res) {
    Thought.findOneAndDelete({_id: req.params.id})
    .then((thought) => {
        if(!thought){
            res.status(404).json({message: 'No thought with that ID'})


        }

        return User.findOneAndUpdate(
            {_id:req.body.userID},
            {$pull:{thoughts:thought._id}},
            {new:true}

        )
   }).then(() => res.json({message: 'User and associated apps deleted!'})).catch((err) => res.status(500).json(err));
  },


//add reaction

    addReaction(req, res) {
      console.log('You are adding reaction');
      console.log(req.body);
      Thought.findOneAndUpdate(
        {_id: req.params.thoughtID},
        {$addToSet: {reactions: req.body}},
        {runValidators: true, new: true}
      )
      .then((thought) =>
        !thought
          ? res.status(404).json({message:'No friends found with this ID :(' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
    },



// delete Reaction
deleteReaction(req, res) {
  console.log(req.params)

    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId} } },
      { runValidators: true, new: true }

    )
      .then((thought) =>
        !thought
          ? res
              .status(404)
              .json({ message: 'No thought found with that ID :(' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
}
}
