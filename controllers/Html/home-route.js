const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Blog, User, Comment } = require('../../models');

router.get('/', async(req, res) => {
  try {
    const allBlogs = await Blog.findAll({
      attributes: [
        'id',
        'blog_title',
        'blog_contents',
        'createdAt'
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment', 'blog_id', 'user_id', 'updatedAt'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    });
    const blogs = allBlogs.map(blog => blog.get({ plain: true }));
   
    res.render('homepage', { blogs });
    // const blogsArr = allBlogs.map(blog => JSON.stringify(blog.comments));
    // console.log(blogsArr);
  }
  catch (e) {
    res.status(400).json({ Error: e });
  }
});


module.exports = router;