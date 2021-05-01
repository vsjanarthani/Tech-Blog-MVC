const router = require('express').Router();
const { Blog, User } = require('../../models');

// GET /api/blogs
router.get('/', async (req, res) => {
    try {
        const allBlogs = await Blog.findAll({include: [User], 
            attributes: { exclude: ['password'] }  
        });
        res.status(200).json(allBlogs);
      }
      catch (e) {
        res.status(400).json({Error: e});
      }
});

// GET /api/blogs/1
router.get('/:id', async (req, res) => {   
    try {
        const { id } = req.params;
        const blogById = await Blog.findOne({
            where: { id }
        });
        res.status(200).json(blogById);
      }
      catch (e) {
        res.status(400).json({Error: e});
      }
});

// POST /api/blogs
router.post('/', async (req, res) => {
    try {
        const { blog_title, blog_contents, user_id } = req.body
        const newBlog =  await Blog.create({
            blog_title, 
            blog_contents,
            user_id
          });
          res.status(200).json(newBlog);
    }
    catch (e) {
        res.status(400).json({Error: e});
      }
});

module.exports = router;