const { Post } = require('../models');

const postdata = [
  {
    title: 'Post number 1',
    post_content: 'this is the body of post 1',
    user_id: 1
  },
  {
    title: 'post number 2',
    post_content: 'this is the body of post 2',
    user_id: 1
  }
  
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;