const router = require('express').Router();
const { Comment, Blog, User } = require('../../models');

// GET /api/comments
router.get('/', async (req, res) => {
    try {
        const allComments = await Comment.findAll({
            include: [{
                model: User,
                attributes: ['username'],
                include: [{
                    model: Blog,
                    attributes: ['blog_title']
                }]
            }]
        });
        res.status(200).json(allComments);
    }
    catch (e) {
        res.status(400).json({ Error: e });
    }
});

// GET /api/comments/id
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const commentById = await Comment.findOne({
            include: [{
                model: User,
                attributes: ['username'],
                include: [{
                    model: Blog,
                    attributes: ['blog_title']
                }]
            }],
            where: { id }
        });
        if (!commentById) {
            return res.status(404).json({ message: 'No comment found with this id' });
        }
        res.status(200).json(commentById);
    }
    catch (e) {
        res.status(400).json({ Error: e });
    }
});

// POST /api/comments
router.post('/', async (req, res) => {
    try {
        // console.log(req.body);
        const { comment, user_id, blog_id} = req.body;
        const newComment = await Comment.create({
            comment,
            user_id,
            blog_id
        });
        res.status(200).json(newComment);
    }
    catch (e) {
        res.status(400).json({ Error: e });
    }
});

// PUT /api/comments/id
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Comment.update(req.body, {
            where: { id }
        });
        const commentById = await Comment.findOne({
            where: { id }
        });
        if (!commentById) {
            return res.status(404).json({ message: 'No Comment found with this id' });
        }
        res.status(200).json({ Updated: commentById });
    }
    catch (e) {
        res.status(400).json({ Error: e });
    }
});

// DELETE /api/comments/id
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const commentById = await Comment.findOne({
            where: { id }
        });
        if (!commentById) {
            return res.status(404).json({ message: 'No comment found with this id' });
        }
        await Comment.destroy({ where: { id } });
        res.status(200).json({ Deleted: commentById });

    } catch (e) {
        res.status(400).json(e);
    }
});

module.exports = router;