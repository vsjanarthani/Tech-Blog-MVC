const router = require('express').Router();
const { Blog, User, Comment } = require('../../models');
// const sessionauth = require('../../utils/auth');

// Get /dashboard
// router.get('/', sessionauth, (req, res) => {
//     Blog.findAll({
//             where: {
//                 user_id: req.session.user_id
//             },
//             attributes: [
//                 'id',
//                 'blog_title',
//                 'blog_contents',
//                 'createdAt'
//             ],
//             include: [{
//                     model: Comment,
//                     attributes: ['id', 'comment', 'blog_id', 'user_id', 'createdAt'],
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
//     Blog.findOne({
//             where: {
//                 id: req.params.id
//             },
//             attributes: [
//                 'id',
//                 'blog_title',
//                 'blog_contents',
//                 'createdAt'
//             ],
//             include: [{
//                 model: Comment,
//                 attributes: ['id', 'comment', 'blog_id', 'user_id', 'createdAt'],
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
//                     message: 'No blog post found with this id'
//                 });
//             }

//             const blog = response.get({
//                 plain: true
//             });

//             res.render('edit-blog', {
//                 blog,
//                 loggedIn: true
//             });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// })

router.get('/new', (req, res) => {
    res.render('add-blog', {
        loggedIn: true
    })
});

module.exports = router;