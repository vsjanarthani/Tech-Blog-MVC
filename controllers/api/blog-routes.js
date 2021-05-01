const router = require('express').Router();
const { Blog, User } = require('../../models');

// GET /api/blogs
router.get('/', async (req, res) => {
  try {
    const allBlogs = await Blog.findAll({
      include: [{
        model: User,
        attributes: ['username'] 
      }]
    });
    res.status(200).json(allBlogs);
  }
  catch (e) {
    res.status(400).json({ Error: e });
  }
});

// GET /api/blogs/id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const blogById = await Blog.findOne({
      where: { id }
    });
    if (!blogById) {
      return res.status(404).json({ message: 'No Blog found with this id' });
    }
    res.status(200).json(blogById);
  }
  catch (e) {
    res.status(400).json({ Error: e });
  }
});

// POST /api/blogs
router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    const { blog_title, blog_contents, user_id } = req.body;
    console.log("Post Route", blog_title, blog_contents, user_id);
    const newBlog = await Blog.create({
      blog_title,
      blog_contents,
      user_id
    });
    res.status(200).json(newBlog);
  }
  catch (e) {
    res.status(400).json({ Error: e });
  }
});

// PUT /api/blogs/id
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Blog.update(req.body, {
      where: { id }
    });
    const blogById = await Blog.findOne({
      where: { id }
    });
    if (!blogById) {
      return res.status(404).json({ message: 'No Blog found with this id' });
    }
    res.status(200).json({Updated: blogById});
  }
  catch (e) {
    res.status(400).json({ Error: e });
  }
});

// DELETE /api/blogs/id
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const blogById = await Blog.findOne({
      where: { id }
    });
    if (!blogById) {
      return res.status(404).json({ message: 'No blog found with this id' });
    }
    await Blog.destroy({ where: { id } });
    res.status(200).json({ Deleted: blogById });

  } catch (e) {
    res.status(400).json(e);
  }
});

module.exports = router;