const router = require('express').Router();
const { Comment, Post, User } = require('../../models');
const sessionAuth = require('../../utils/sessionauth');

// GET /api/comments
router.get('/', async (req, res) => {
    try {
        const allComments = await Comment.findAll({
            include: [{
                model: User,
                attributes: ['username'],
                include: [{
                    model: Post,
                    attributes: ['post_title']
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
                    model: Post,
                    attributes: ['post_title']
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
router.post('/', sessionAuth, async (req, res) => {
    try {
        // console.log(req.body);
        const { comment, post_id} = req.body;
        const newComment = await Comment.create({
            comment,
            user_id: res.session.user_id,    // change it to res.session.user_id '0a9213f9-003e-4fba-9837-e23756924e99'
            post_id
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