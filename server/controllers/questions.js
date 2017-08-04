let mongoose = require("mongoose");
let Question = mongoose.model("Question");

module.exports = {
  // index to test with postman
  index: function(req, res) {
    Question.find({}, function(err, question) {
      if (err) {
        return res.json(err);
      }
      return res.json(question);
    });
  },

  // Create a question => sends to DB <= newly created question
  create: function(req, res) {
    Question.create(req.body, function(err, question) {
      if (err) {
        return res.json(err);
      }
      return res.json(question);
    });
  },

  show: function(req, res) {
    Question.findbyId(req.param.id, function(err, question) {
      if (err) {
        return res.json(err);
      }
      return res.json(question);
    });
  }
};
// update: function(req, res){
//   Question.findbyIdAndUpdate(req.params.id, function(err, question){
//     if (err) {
//       return res.json(err);
//     }
//     return res.json(question);
//   })
// };

// ********************* sample code *****************************

// .populate ({
//   path: 'answer',
//   model: 'Answer',
//   populate:{
//     path: 'user',
//     model:'User'
//   }
// // })

// delete: function(req, res){
//   Question.findbyIdAndRemove(req.params.id, function(err, question){
//     if (err) {
//       return res.json(err);
//     }
//     return res.json(question);
//   })
// }
//

// updateVotes: function(req, res){
//     Question.findByIdAndUpdate(req.params.id, {$inc:{answers:{votes:1}}},
//       {new:true}, (err, answer) => {
//           if(err){return res.json(err)}
//           return res.json(question);
//     })
// }
