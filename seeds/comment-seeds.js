const { Comment } = require("../models");

const commentdata = [
  {
    comment_text: "comment number 1",
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: "comment number 2",
    user_id: 1,
    post_id: 1
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;