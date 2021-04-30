// import models
const Blog = require('./Blog');
const User = require('./User');
const Comment = require('./Comment');

// Blog belongsTo User
Blog.belongsTo(User, {foreignKey: `user_id`});

// Comment belongsTo blog
Comment.belongsTo(Blog, {foreignKey: `blog_id`});

// User has many Blogs
User.hasMany(Blog, {foreignKey: `blog_id`});

// User has many Comments
User.hasMany(Comment, {foreignKey: `comment_id`});

// Blog has many comments
Blog.hasMany(Comment, {foreignKey: `comment_id`});


module.exports = {
Blog,
User,
Comment
};
