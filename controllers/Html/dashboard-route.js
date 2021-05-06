const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
// const sessionauth = require('../../utils/auth');

// Get /dashboard
// router.get('/', sessionauth, (req, res) => {
//     Post.findAll({
//             where: {
//                 user_id: req.session.user_id
//             },
//             attributes: [
//                 'id',
//                 'post_title',
//                 'post_contents',
//                 'createdAt'
//             ],
//             include: [{
//                     model: Comment,
//                     attributes: ['id', 'comment', 'post_id', 'user_id', 'createdAt'],
//                     include: {
//                         model: User,
//                         attributes: ['username']
//                     }
//                 },
//                 {
//                     model: User,
//                     attributes: ['username']
//                 }
//             ]
//         })
//         .then(dbPostData => {
//             const posts = dbPostData.map(post => post.get({
//                 plain: true
//             }));
//             res.render('dashboard', {
//                 posts,
//                 loggedIn: true
//             });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

// Get /dashboard/edit/:id
// router.get('/edit/:id', sessionauth, (req, res) => {
//     Post.findOne({
//             where: {
//                 id: req.params.id
//             },
//             attributes: [
//                 'id',
//                 'post_title',
//                 'post_contents',
//                 'createdAt'
//             ],
//             include: [{
//                 model: Comment,
//                 attributes: ['id', 'comment', 'post_id', 'user_id', 'createdAt'],
//                 include: {
//                     model: User,
//                     attributes: ['username']
//                 }
//             },
//             {
//                 model: User,
//                 attributes: ['username']
//             }
//         ]
//         })
//         .then(response => {
//             if (!response) {
//                return res.status(404).json({
//                     message: 'No post post found with this id'
//                 });
//             }

//             const post = response.get({
//                 plain: true
//             });

//             res.render('edit-post', {
//                 post,
//                 loggedIn: true
//             });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// })

router.get('/new', (req, res) => {
    res.render('add-post', {
        loggedIn: true
    })
});

module.exports = router;