// import models
const Blog = require('./Blog');
const User = require('./User');
const Comment = require('./Comment');

// Blog belongsTo User
Blog.belongsTo(User, {foreignKey: `user_id`});

// Comment belongsTo User
Comment.belongsTo(User, {foreignKey: `user_id`});

// Comment belongsTo blog
Comment.belongsTo(Blog, {foreignKey: `blog_id`});

// User has many Blogs
User.hasMany(Blog);

// User has many Comments
User.hasMany(Comment);

// Blog has many comments
Blog.hasMany(Comment);


module.exports = {
Blog,
User,
Comment
};
