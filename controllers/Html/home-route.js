const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment } = require('../../models');

router.get('/', async(req, res) => {
  try {
    const allPosts = await Post.findAll({
      attributes: [
        'id',
        'post_title',
        'post_contents',
        'createdAt'
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment', 'post_id', 'user_id', 'updatedAt'],
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
    const posts = allPosts.map(post => post.get({ plain: true }));
    res.render('homepage', { posts });
  }
  catch (e) {
    res.status(400).json({ Error: e });
  }
});


module.exports = router;