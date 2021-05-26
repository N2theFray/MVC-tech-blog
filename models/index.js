const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    
})

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
    hooks: true
})

User.hasMany(Comment, {
    foreignKey: 'user_id',
    
})

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    
})

User.hasMany(Post, {
    foreignKey: 'user_id',
    
})

Post.belongsTo(User, {
    foreignKey: 'user_id', 
    
})


module.exports = { User, Post, Comment };