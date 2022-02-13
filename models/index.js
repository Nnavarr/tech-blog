// import all models
const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');

// one to many User to Post
User.hasMany(Post, {
    foreignKey: 'user_id'
})

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

// one to many User to Comment
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelte: 'SET NULL'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
})

// one to many Post to Comment
Post.hasMany(Comment, {
    foreignKey: 'post_id'
})

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
})

module.exports = { User, Post, Comment }